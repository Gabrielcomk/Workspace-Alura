package Desafios2;

import java.text.DecimalFormat;

public class ConversorDolar {
    public static void main(String[] args) {
        double dolar = 4.94;
        double quantidadeReais = 1;
        double total = quantidadeReais * dolar;
        DecimalFormat df = new DecimalFormat("#,###.00");
        System.out.println("\n" + df.format(quantidadeReais) + "R$ equivale a " +
                "" + df.format(total) + "$, considerando o valor do dolar dolar como " + df.format(dolar) + "$");
    }
}

