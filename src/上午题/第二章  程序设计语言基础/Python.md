# Python

## 深度学习模型框架
TensorFlow、PyTorch、Keras、MXNet、Caffe、Theano、CNTK、Chainer、DL4J、FastAI

## 基础语法
1. 某python程序中定义了X=【1，2】，那么X*2的值为（49）
   > A. 【1，2，1，2】
   答案：A
   解析：列表的乘法操作是将列表重复指定的次数。
2. 以下关于Python的说法中错误的是（49）
   A. Python是一种解释型语言
   B. Python是一种面向对象的语言
   C. Python是一种弱类型语言
   D. Python是一种静态类型语言
   
   >答案：D
   解析：Python是一种动态类型语言，变量的类型是在运行时确定的，而不是在编译时确定的。   
3. 在Python语言中，（50）是一种不可变的、有序的序列结构，其中元素可以重复
    A. 列表
    B. 元组
    C. 字典
    D. 集合
    
    >答案：B
    解析：元组是不可变的、有序的序列结构，元素可以重复。列表是可变的、有序的序列结构，元素可以重复。字典是无序的、可变的键值对集合，键不能重复。集合是无序的、可变的唯一元素集合，元素不能重复。
4. 在Python中，表达式2***3的结果是（44）。
    A. 6
    B. 8
    C. 9
    D. 5
    
    >答案：B
    解析：在Python中，**运算符表示幂运算，2**3表示2的3次方，结果是8。
5. 在Python中，设a=2, b=3,表达式`a<b and b>=3`的值是（61）。
    A. True
    B. False
    
    >答案：A
    解析：a<b的值为True，b>=3的值为True，True and True的值为True。
6. 元组的表示形式
    - () # 空元组, 等价于tuple()
    - (1,) # 单元素元组
    - (1,2,3) # 多元素元组
    > 特别注意： (1) 不是元组，是数字1
7. 执行以下 Python 语句之后，列表x 为 ( ) D.[1,2,3,[4,5]]

    x=[1,2,3]

    x.append([4,5])
8. 执行以下Python语句之后，列表y为( )。 B.[1,2,3,4,5,6]

    x=[1,2,3]

    y=x+[4,5,6]
9. 关于Python，下列说法正确的是( ) B 

    A.用try捕获异常，有except，无需执行finaly : finaly 总会被执行

    B.可以使用 raise关键字来手动抛出异常

    C.except Exception可以捕获**所有**异常:  BaseException是所有异常的**基类**，捕获所有异常用**BaseException**

    D.可以用switch...case语句表示选择结构: Python中没有内置的switch...case语句
10. 字典是Python语言中的一个复合数据类型，现定义字典dict1如下，则不正确的语句为()。dict1={name':'David','age'.10,'class':'first}
    

    A.dict1['age']=15 ✅ 正确。修改键 `'age'` 的值，变成 15。

    B.del dict1[1] ❌ 错误。字典的键是 `'name'`、`'age'`、`'class'`，没有键 `1`，会抛出 `KeyError: 1`

    C.del dict1 ✅ 正确。可以删除整个字典对象。之后再访问 `dict1` 会报错 `NameError`，但语句本身没问题。

    D.print(dict1 ['name']) ✅ 正确。输出 `"David"`。
11. 

