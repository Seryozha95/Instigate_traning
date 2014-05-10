package books;
import java.awt.Desktop;
import java.io.IOException;
import java.net.URI;
public class Link {
           public void  openLink(String url)  {
               // String link = "http://books.google.am/books?id=abYKXvCwEToC&printsec=frontcover&dq=Harry+Potter&hl=ru&sa=X&ei=AXlsU8nfKYjW7QaG3IC4Cg&redir_esc=y#v=onepage&q=Harry%20Potter&f=false"; 
                   //String url 
                    Runtime runtime = Runtime.getRuntime();
         try {
             runtime.exec("xdg-open " + url);
         }
         catch (IOException e) {
             e.printStackTrace();
         }
        }
        
}

