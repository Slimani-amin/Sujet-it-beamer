
interface Product {
    void use();
}

class ConcreteProduct implements Product {
    public void use() {
        System.out.println("Using ConcreteProduct");
    }
}

class ProductFactory {
    public static Product createProduct() {
        return new ConcreteProduct();
    }
}

public class Main {
    public static void main(String[] args) {
       // Utilisation
       Product product = ProductFactory.createProduct();
       product.use();
    }
}



