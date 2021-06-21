//Object 模拟链表
const a = { val: 'a' }
const b = { val: 'b' }
const c = { val: 'c' }
a.next = b
b.next = c

//遍历链表
let p = a;
while (p) {
  console.log(p.val)
  p = p.next
}

//插入
const d = { val: 'd'}
a.next = d
d.next = b

//删除
a.next = b
