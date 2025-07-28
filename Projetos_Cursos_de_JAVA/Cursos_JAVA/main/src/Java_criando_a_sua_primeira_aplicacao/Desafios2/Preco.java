package Java_criando_a_sua_primeira_aplicacao.Desafios2;

import java.text.DecimalFormat;

public class Preco {
    public static void main(String[] args) {
       double precoProduto = 5.89;
       int quantidade = 3;
       String item = "Pasteis";
       double total = precoProduto * quantidade;
        DecimalFormat df = new DecimalFormat("#,###.00");
        System.out.println("A compra de " + quantidade + " " + item + " deu " + df.format(total) + "R$");
    }
}

