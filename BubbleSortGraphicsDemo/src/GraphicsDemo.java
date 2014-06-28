
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Observable;
import java.util.Observer;


public class GraphicsDemo extends JFrame implements Observer {

	private DemoArray array;
	private final int rectWidth = 10;
	private final int rectValueHeight = 10;
	private final int rectSpace = 10;
	private final int rectsBottomY = 200;

    public GraphicsDemo(DemoArray a) {
    	array = a;
    	setTitle("BubbleSortGraphicsDemo");
    	setMinimumSize(new Dimension(800, 600));
    	setVisible(true);
 
    }
    
    public void paint(Graphics g) {
    	Graphics2D g2 = (Graphics2D) g;
    	g2.clearRect(0, 0, 800, 600);
    	for (int i = 0; i < array.values.length; ++i) {
    		int rectHeight = rectValueHeight * array.values[i];
    		int x = i * (rectWidth + rectSpace);
    		int y = rectsBottomY - rectHeight;
    		g2.fillRect(x, y, rectWidth, rectHeight);
    	}
    }
    
    public void update(Observable o, Object g) {
    	repaint();
    }
	
}
