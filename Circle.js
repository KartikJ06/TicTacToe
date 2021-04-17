class Circle {
    constructor(){
        this.width = 50 
        this.height = 50 

        this.image = loadImage("Circle.jpg"); 
    }

    display(x,y){
        image(this.image,x,y,this.width, this.height)

    }
}