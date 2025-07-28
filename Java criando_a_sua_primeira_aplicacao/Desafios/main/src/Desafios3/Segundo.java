package Desafios3;
import java.util.Scanner;

public class Segundo {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        int pNumero = scanner.nextInt();
        System.out.println("Gravado: " + pNumero);
        int sNumero = scanner.nextInt();
        System.out.println("Gravado: " + sNumero);
        if (pNumero < sNumero){
            System.out.println(pNumero + " é menor do que " + sNumero);
        } else if (pNumero > sNumero){
            System.out.println(pNumero + " é maior do que " + sNumero);
        } else if (pNumero == sNumero){
            System.out.println(pNumero + " e " + sNumero + " são iguais.");
        } else {
            System.out.println("Erro.");
        }
    }
}
