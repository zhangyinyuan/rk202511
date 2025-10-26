# Java经典题型

## 201105

```java
【Java代码】
import java．util.*;
 (1)  MenuComponent{
  protected String name;
  (2) ;//添加新菜单
  public abstract void print();    //打印菜单信息
  public String getName(){ return name;}
}
class Menultem extends MenuComponent{
    private double price;
    public MenuItem(String name, double price){
     this.name= name;  this.price= price;
   }
    public double getPrice(){return price;)}
    public void add(MenuComponent menuComponent){ return;}//添加新菜单
    public void print(){
      System.out.print(" "+ getName());   
      System.out.println(","+ getPrice());
    }
}
class Menu extends MenuComponent{  
    private List<MenuComponent> menuComponents= new ArrayList<MenuComponent>();
    public Menu(String name){ this.name= name;)
    public void add(MenuComponent menuComponent){//添加新菜单
        menuComponents. (3);
    }
    public void print(){
    System.out.print("\n"+ getName());
    System.out.println(","+"---------------");
    Iterator iterator = menuComponents.iterator();
    while(iterator.hasNext()){
         MenuComponent menuComponent= (MenuComponent)iterator.next();
         (4) ;
     }
    }
}
class MenuTestDrive{
  public static void main(String args[]){
     MenuComponent   aIIMenus= new Menu("ALL MENUS");
     MenuComponent   dinerMenu = new Menu("DINER MENU”);
     ……//创建更多的Menu对象，此处代码省略
    allMenus.add(dinerMenu);   //将dinerMenu添加到餐厅菜单中
    ……//为餐厅增加更多的菜单，此处代码省略
      (5);   //打印饭店所有菜单的信息
    }
 }
```

#### Java容易丢分的点总结

1. 忘记了修饰符public/protected
2. 忘记了abstract class
3. 方法名忘记了public/protect abstract
4. 构造方法需要传参，但是没有传
5. 抽象的方法没有调用，对于复杂题目
