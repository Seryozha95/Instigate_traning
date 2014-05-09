package libraryBooks;
import  books.*;
public class Armenian extends Books {
    public int getbook() {
        quantity = quantity+1;
        return quantity;
    }
    public int setbook() {
        quantity = quantity-1;
        return quantity;
    }
}
