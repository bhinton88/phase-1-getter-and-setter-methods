class Circle {
  constructor(radius){
    this.radius = radius
  }

  get diameter() {
    return this.diameter = this.radius * 2
  }

  get circumference () {
    return this.circumference = Math.PI * this.diameter
  }

  get area() {
    return this.area = Math.PI * (this.radius ** 2)
  }

  set diameter(newDiameter) {
    this.radius = newDiameter / 2
  }

  set circumference(newRadius){
    this.radius = newRadius / (2 * Math.PI)
  }

  set area(newArea) {
    this.radius = Math.sqrt(newArea / Math.PI)
  }

}