import java.util.Observable;


public class BubbleSort extends Observable {

	public void sort(DemoArray array) {
		for (int j = 0; j < array.values.length; ++j) {
			for (int i = 0; i < array.values.length - j - 1; ++i) {
				if (array.values[i] > array.values[i + 1]) {
					try {
						Thread.sleep(500);
						array.initSwap(i, i + 1);
						notifyAll(array);
						array.doSwap();
						notifyAll(array);
					} catch ( Exception e) {
						
					}
				}
			}
		}
	}
	
	public void notifyAll(Object param) {
	    setChanged();
	    notifyObservers(param);
	}
}
