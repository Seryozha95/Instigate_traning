import java.util.Scanner;
public class Main {
     public static void main(String[] args) {
         Scanner scan = new Scanner( System.in );
         System.out.print("Insert size of array  ");
         int n=scan.nextInt();
         System.out.println("Insert array");
         int[] myArray = new int[n];
         for(int i=0; i<myArray.length; i++){ 
             System.out.print("array" + "[" +(i+1)+ "]" + "= ");
             int number=scan.nextInt();
             myArray[i]=number;
         }
         System.out.println("*******");        
         CombSort cb=new CombSort();
         cb.comb(myArray);
     }
}

