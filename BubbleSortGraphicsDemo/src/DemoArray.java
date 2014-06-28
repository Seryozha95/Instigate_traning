
public class DemoArray {
	public int values[];
	private int leftValueIndex = -1;
	private int rightValueIndex = -1;

	public DemoArray(int valuesCount) {
		values = new int[valuesCount];
	   	for (int i = 0; i < valuesCount; ++i) {
    		values[i] = (int) (10 * Math.random());
    	}
	}
	
	public int getLeftValueIndex() {
		return leftValueIndex;
	}
	
	public int getRightValueIndex() {
		return rightValueIndex;
	}
	
	public void initSwap(int left, int right) {
		leftValueIndex = left;
		rightValueIndex = right;
	}
	
	public void doSwap() {
		int temp = values[leftValueIndex];
		values[leftValueIndex] = values[rightValueIndex];
		values[rightValueIndex] = temp;
	}
}
