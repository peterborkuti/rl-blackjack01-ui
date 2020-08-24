import { Component, OnInit, ElementRef, AfterViewInit, Input } from '@angular/core';
import * as d3 from 'd3';
import { _3d } from 'd3-3d';
import { State } from '../classes/state';

/**
 * The code is from here:
 * https://gist.github.com/Niekes/e920c03edd7950578b8a6cded8b5a1a5
 * 
 * Thank you, Stefan Nieke
 */

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {
  private svg;
  private hostElement;
  private mx;
  private my;
  private mouseX;
  private mouseY;
  private surface;
  private color;
  j = 16;
  alpha = 0; beta = 0; startAngle = Math.PI/4;
  private d3Data = [];
  private state = new State();

  @Input()
  set graphData(data: {[key: string]: number}) {
    if (!data || Object.keys(data).length === 0) {
        return;
    }
    console.log("data:", data);
    this.d3Data.length = 0;

    /*

    const rn1 = Math.floor(d3.randomUniform(1, 12)());
    const j = 16;
    for(let z = -j; z < j; z++){
        for(let x = -j; x < j; x++){
            this.d3Data.push({x: x, y: Math.cos(Math.sqrt(x*x+z*z)/5*Math.PI)*rn1, z: z});
        }
    }

    */

    const keys = Object.keys(data);

    keys.forEach(key => {
        const parts = this.state.splitKey(key);
        this.d3Data.push([parts.sum, data[key], parts.dealerCard]);
    })

    //this.d3Data = [[[0,-1,0],[-1,1,0],[1,1,0]]];

    this.init();
  }

  constructor(private elRef: ElementRef) {
    this.hostElement = this.elRef.nativeElement;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.svg    = d3.select(this.hostElement.querySelector('svg'))
        .call(d3.drag().on('drag', this.dragged.bind(this))
        .on('start', this.dragStart.bind(this))
        .on('end', this.dragEnd.bind(this))).append('g');
    
    this.surface = _3d()
    .scale(100)
    .origin([480, 250])
    .shape('TRIANGLE');

    /*
    this.surface = _3d()
      .scale(10)
      .x(function(d){ return d.x; })
      .y(function(d){ return d.y; })
      .z(function(d){ return d.z; })
      .origin([480, 250])
      .rotateY(this.startAngle)
      .rotateX(-this.startAngle)
      .shape('SURFACE', this.j*2);
    */
    this.color = d3.scaleLinear();

    d3.selectAll('button').on('click', this.init.bind(this));

    //this.change();
  }

  processData(data, tt){

      const planes = this.svg.selectAll('path').data(data, function(d){ return d.plane; });

      planes
          .enter()
          .append('path')
          .attr('class', '_3d')
          .attr('fill', this.colorize.bind(this))
          .attr('opacity', 0)
          .attr('stroke-opacity', 0.1)
          .merge(planes)
          .attr('stroke', 'black')
          .transition().duration(tt)
          .attr('opacity', 1)
          .attr('fill', this.colorize.bind(this))
          .attr('d', this.surface.draw);

      planes.exit().remove();

      d3.selectAll('._3d').sort(this.surface.sort);
  }

  colorize(d){
      //const _y = (d[0][1] + d[1][1] + d[2][1] + d[3][1])/4;
      const _y = (d[0][1] + d[1][1] + d[2][1])/3;
      return d.ccw ? d3.interpolateSpectral(this.color(_y)) : d3.color(d3.interpolateSpectral(this.color(_y))).darker(2.5);
  }

  dragStart(){
      this.mx = d3.event.x;
      this.my = d3.event.y;
  }

  dragged(){
      this.mouseX = this.mouseX || 0;
      this.mouseY = this.mouseY || 0;
      this.beta   = (d3.event.x - this.mx + this.mouseX) * Math.PI / 230 ;
      this.alpha  = (d3.event.y - this.my + this.mouseY) * Math.PI / 230  * (-1);
      this.processData(
          this.surface
            .rotateY(this.beta + this.startAngle)
            .rotateX(this.alpha - this.startAngle)(this.d3Data),
        0);
  }

  dragEnd(){
      this.mouseX = d3.event.x - this.mx + this.mouseX;
      this.mouseY = d3.event.y - this.my + this.mouseY;
  }

  init(){
      if (!this.d3Data || this.d3Data.length === 0) {
          return;
      }

      const yMin = d3.min(this.d3Data, function(d){ return d[1]; });
      const yMax = d3.max(this.d3Data, function(d){ return d[1]; });

      this.color.domain([yMin, yMax]);
      this.processData(this.surface(this.d3Data), 1000);
  }


}
