import java.util.Scanner;
public class Main {
    public void Main(){
    }
    public void MainFunction(ErankyunTiv myNumber, int quantityOfDivisor) {
        for (int n =0; n < quantityOfDivisor;) {
             for ( int number =0; ; number ++) {
                 myNumber.erankyunNumber(number);
                 for ( int i=1; i < myNumber.numberValue; i++) {
                     myNumber.divisor(myNumber.numberValue, i);
                     if (myNumber.numberDivisor == 0) {
                         n++;
                     }
                     if (n ==  quantityOfDivisor) {
                        System.out.println(myNumber.numberValue);
                         return;
                     }
                 }
                 n=0;
             }
        }
    }

    public static void main(String args[]) {
        Scanner scan=new Scanner(System.in);
        System.out.println("How many divisors do you want ? ");
        int quantityOfDivisor=scan.nextInt();
        ErankyunTiv myNumber = new ErankyunTiv();
        Main m=new Main();
        m.MainFunction(myNumber,quantityOfDivisor);
    }
}
