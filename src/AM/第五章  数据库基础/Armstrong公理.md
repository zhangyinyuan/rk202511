# Armstrong 公理

## 函数依赖的Armstrong 公理系统（Armstrong's Axioms）

### ① 三条基本公理 (谐音记忆： 自增传Zhuan)

1. **自反律（Reflexivity）**
   若Y⊆X⊆U，则X→Y为F所蕴含；
2. **增广律（Augmentation）**
   若X→Y为F所蕴含，且Z⊆U，则XZ→YZ为F所蕴含；
3. **传递律（Transitivity）**
   若X→Y，Y→Z为F所蕴含，则X→Z为F所蕴含。

------

### ② 常用推论（由三条基本公理导出）

1. **合并律（Union / Composition）**
   若X→Y，X→Z，则X→YZ为F所蕴含；
2. **分解律（Decomposition / Projectivity）**
   若X→Y，Z⊆Y，则X→Z为F所蕴含。
3. **伪传递律（Pseudo-Transitivity）**
   若X→Y，WY→Z，则XW→Z为F所蕴含；

------

### ③ 用途

- 判断一个函数依赖是否能由已知依赖推出。
- 计算属性闭包（Closure）。
- 判断候选键、超键。
- 数据库规范化（2NF、3NF、BCNF）。

------

### 📖 总结口诀

- **自反律**：大包小必然成立。
- **增广律**：左右同加仍然真。
- **传递律**：$X \to Y, Y \to Z \Rightarrow X \to Z$。
- **合并律**：依赖可以并到一起。
- **分解律**：依赖可以拆开单个。
- **伪传递律**：加个 $W$ 也能传。

---

## 求闭包题型

给定关系模式R(U,F)，U={A,B,C,D}，函数依赖集F={AB->C,CD->B)。关系模式R ( **C** ) ，主属性和非主属性的个数分别为 ( **A** ) 。

A.只有1个候选关键字ACB

B.只有1个候选关键字 BCD

C.有2个候选关键字ABD和ACD

D.有2个候选关键字ACB和BCD

A.4和0		B.3和1		C.2和2		D.1和3



解析：

U={A,B,C,D}， 并且由函数依赖集F得知，CB可以被推导出，AB不能被导出

所以A和B一定在候选关键字中。

开始求闭包

(A)+ = A 不等于U，所以得不到U

(AB)+ = ABC,仍然得不到U

(ABD)+ = ABCD=U,所以ABD是候选关键字，个数为3

同理ACD也可以得到U，所以ACD也是候选关键字,个数为3



---

