function run(){function a(){for(let e=0;e<3;e++){var a=Particle.create(10,o+randomNumberRange(-50,50),5,"lightgray",10);a.velocity=Vector.create(randomNumberRange(0,1),randomNumberRange(-1,1)),r.push(a)}}function e(){for(let a=0;a<r.length;a++)r[a].updatePosition()}function n(){for(let a=0;a<r.length;a++)draw(c,r[a])}function t(){c.clearRect(0,0,canvas.width,canvas.height),i<10?i++:(a(),i=0),e(),n(),requestAnimationFrame(t)}var r=[],o=(canvas.width,canvas.height/2),i=0;t()}var canvas=document.querySelector("canvas"),c=canvas.getContext("2d");run();