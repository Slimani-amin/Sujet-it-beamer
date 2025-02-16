import java.util.ArrayList;
import java.util.List;

interface Observer {
    void update(String message);
}
class ConcreteObserver implements Observer {
    public void update(String message) {
        System.out.println("Received: " + message);
    }
}
public class Subject {
    private List<Observer> observers = new ArrayList<>();

    public void addObserver(Observer observer) {
        observers.add(observer);
    }

    public void notifyObservers(String message) {
        for (Observer observer : observers) {
            observer.update(message);
        }
    }
    public static void main(String[] args) {
        // Utilisation
        Subject subject = new Subject();
        subject.addObserver(new ConcreteObserver());
        subject.notifyObservers("Hello, Observers!");
    }
}



