
<template>
  <canvas></canvas>
</template>

<script>
  class Triplet {
    constructor(x, y, z) {
      this.x = x
      this.y = y
      this.z = z
    }
  }

  class Point extends Triplet {
    constructor(x, y, z) {
      super(x, y, z)
    }
    distanceSquared(p) {
      let dx = this.x - p.x
      let dy = this.y - p.y
      let dz = this.z - p.z
      return dx*dx + dy*dy + dz*dz
    }
    distance(p) {
      return Math.sqrt(this.distanceSquared(p))
    }
  }
  class Intersection {
    constructor(po, transform3)
  }
  class Sphere {

  }
  class Material {

  }
</script>


<style scoped>

</style>
