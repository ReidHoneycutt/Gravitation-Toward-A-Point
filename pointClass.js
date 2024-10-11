class Point {
    constructor(x, y, ID) {
        this.x = x;
        this.y = y;
        
        this.color = 1;
        this.ID = ID;
    }
    show() {
        n++
        colorMode(HSB, 1, 1 , 1);
        stroke(this.color, 1, 1);
        strokeWeight(2+n%5);
        point(this.x, this.y);
    }
    update() {
        //one click
        if (change %2 != 0) {
            let d = dist(this.x, this.y, mouseX, mouseY)/Math.sqrt(MAX);
            this.color = d;
            
            this.x -= (this.x - mouseX) / d;
            this.y -= (this.y - mouseY) / d;
        //two clicks 
        } else {
            let d = dist(this.x, this.y, hinduGod[this.ID][0], hinduGod[this.ID][1])/ Math.sqrt(MAX);
            this.color = d;
            if (d > 0) {
                this.x -= (this.x - hinduGod[this.ID][0]) / d;
                this.y -= (this.y - hinduGod[this.ID][1]) / d; 
            }
        }
    }
}
