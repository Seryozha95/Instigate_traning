package libraryBooks;
import  books.*;
public class English extends Books {
    public int getbook() {
        quantity = quantity+1;
        return quantity;
    }
    public int setbook() {
        quantity = quantity-1;
        return quantity;
    }
}
