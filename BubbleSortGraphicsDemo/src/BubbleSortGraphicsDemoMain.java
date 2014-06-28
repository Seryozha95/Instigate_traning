
public class BubbleSortGraphicsDemoMain {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		DemoArray array = new DemoArray(10);
		GraphicsDemo demo = new GraphicsDemo(array);
		BubbleSort bubble = new BubbleSort();
		bubble.addObserver(demo);
		bubble.sort(array);
	}

}
