import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.browser.window
import kotlin.math.PI

var canvas= document.getElementById("canvasid") as HTMLCanvasElement
//对画布所有的操作都要通过context
var context =canvas.getContext("2d") as CanvasRenderingContext2D
fun main(args: Array<String>) {
    context.canvas.width= window.innerWidth;
    context.canvas.height= window.innerHeight;
//    drawLine();
//
//    drawSolide();
//    drawCircle();
    drawOuter();
}

fun drawOuter() {
    context.lineWidth=5.0
    context.translate(window.innerWidth/2.toDouble(), window.innerHeight/2.toDouble())
    context.arc(0.0,0.00,200.0,0.0,2* PI);
    context.stroke()
}

fun drawSolide() {
   context.fillStyle="red"
    context.strokeStyle="blue"
    context.lineWidth= 5.0;
    context.moveTo(100.0,100.0);
    context.lineTo(300.0,300.0)
    context.lineTo(300.0,400.0)
    context.lineTo(100.0,100.0);
    context.fill()
    context.stroke();//绘制轨迹
}

fun drawCircle() {
    context.beginPath()
    //definedExternally true逆时针，m默认是false
    //startAngle开始角度
    //endAngle结束弧度
    context.arc(500.0,400.0,100.0,0.0,0.3* PI,true);//指定轨迹不会画
    context.stroke();//绘制轨迹
}

fun drawLine() {
    context.lineWidth= 5.0;
    context.strokeStyle="red"
    context.moveTo(100.0,100.0);
    context.lineTo(300.0,300.0)
    context.lineTo(300.0,400.0)
    context.lineTo(100.0,100.0);
    context.stroke();//绘制轨迹
}
