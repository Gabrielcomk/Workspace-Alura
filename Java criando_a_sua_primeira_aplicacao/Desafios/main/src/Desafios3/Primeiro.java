package Desafios3;
import java.util.Scanner;

public class Primeiro {
    public static void main(String[] args){
        System.out.println("Digite um número: ");
        Scanner scanner = new Scanner(System.in);
        int numero = scanner.nextInt();
        if (numero < 0){
            System.out.println("Número Negativo.");
        } else if (numero > 0){
            System.out.println("Número Positivo.");
        } else {
            System.out.println("Digite um número.");
        }
        scanner.close();
    }
}
