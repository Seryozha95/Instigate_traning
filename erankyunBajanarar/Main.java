import java.util.Scanner;
public class Main {
    public static void main(String args[]) {
        Scanner scan=new Scanner(System.in);
        System.out.print("How many divisors do you want ? ");
        int quantityOfDivisor=scan.nextInt();
        ErankyunTiv myNumber = new ErankyunTiv();
//        while (true) {
            for (int n =0; n < quantityOfDivisor;) {
               for ( int number =0; ; number ++) {
                    myNumber.erankyunNumber(number);
                    System.out.println(myNumber.numberValue);
                    for ( int i=1; i < myNumber.numberValue; i++) {
                        myNumber.divisor(myNumber.numberValue, i);
                        if (myNumber.numberDivisor == 0) {
                               n++;
                        }
                        if (n ==  quantityOfDivisor) {
                            break;
                        }
                        

                    }
                }
            }
        }
  //  }
}
    
