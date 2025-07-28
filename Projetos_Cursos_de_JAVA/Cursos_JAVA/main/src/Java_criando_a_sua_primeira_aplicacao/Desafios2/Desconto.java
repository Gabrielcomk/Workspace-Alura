package Java_criando_a_sua_primeira_aplicacao.Desafios2;

import java.text.DecimalFormat;

public class Desconto {
    public static void main (String[] args){
        double precoOriginal = 10;
        double percentualDesconto = 10;
        DecimalFormat df = new DecimalFormat("#,###.00");
        double precoDescontado = precoOriginal - ((precoOriginal * percentualDesconto) / 100);
        System.out.println("\nPreço Original: " +
                "" + precoOriginal + "R$\nDesconto: " +
                "" + percentualDesconto + "%\nValor líquido: " +
                "" + df.format(precoDescontado) + "R$");
    }
}
