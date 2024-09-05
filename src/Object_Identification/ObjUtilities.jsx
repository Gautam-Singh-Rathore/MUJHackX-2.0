export const drawRect = (detections , ctx)=>{
    //Loop through each prediction
    detections.forEach(prediction => {
        // Extract boxes and classes
        const [x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];

        //Set styling
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        ctx.strokeStyle ='#'+randomColor;
        ctx.font = '18px Arial';

        // Draw rectangle an dtext 
        ctx.beginPath();
        ctx.fillStyle = '#'+randomColor;
        ctx.fillText(text , x,y);
        ctx.rect(x,y,width,height);
        ctx.stroke();
    });
}