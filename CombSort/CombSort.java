public class CombSort {
    public void comb(int[] arr) {
    int gap=arr.length;
    int c=0;
    int i=0;
    while (gap > 0) {
        gap =(int) (gap/1.2743);
             i=0;
            while (i+gap <arr.length) {
                if ( arr[i] > arr[i+gap] ){
                  c=arr[i];
                  arr[i]=arr[i+gap];
                  arr[i+gap]=c;
                  i++;

               }
               else {
                   i++;
               }
            }
    }
    for (i=0; i<arr.length; i++ ){
       System.out.println("array[" + i + "]= " + arr[i]);
    }
    }
}
    




                
    


