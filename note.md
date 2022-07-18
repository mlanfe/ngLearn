1. Directives have a similar lifecycle, as Angular creates, updates, and destroys instances in the course of execution.

2. Modules, components and services are classes that use decorators. These decorators mark their type and provide metadata that tells Angular how to use them.

3. service相关: service class是提供者`provider`; injector 注册 provider, 通过new的方式创建service实例; A dependency doesn't have to be a service —it could be a function, for example, or a value.; AG检测组件的构造函数来判断组件需要什么服务

   1. Services can depend on other services. 每个service至少注册一个provider

   2. the @Injectable() decorator indicates that a component, class, pipe, or NgModule has a dependency on a service.

   3. angular 把 service 作为`依赖`注入到组件中, 对于服务, provider 就是 service class 本身; 使用 injector 管理着provider列表, 并使用这些provider来创建 service 的实例

   4. 注入器会创建依赖、维护一个容器来管理这些依赖(依赖可能是服务的实例)，并尽可能复用它们。

   5. 一个注入器会创建一个provider的单一实例, 该单一实例被多个组件共享
      An injector provides a singleton instance of a dependency, and can inject this same instance in multiple components.

   6. You can configure injectors with different providers that can provide different implementations of the same dependency.

   7. 在@NgModule 中注册提供者, 服务的同一个实例将会对该 NgModule 中的所有组件可用;
      @Injectable()的 root level 中注册提供者, Angular 会为该服务创建一个单一的共享实例，并且把它注入到任何想要它的类中;
      当在组件级别注册提供者, 组件的每一个新实例依赖该服务的实例不是同一个实例;

   8. 在ngModule中或者在服务的providedIn取值为具体的模块/root, 那这个服务是`单例服务`:  a service for which only one instance exists in an application.

   9. 出于`tree-shaking`的考虑, 应该优先使用 `@Injectable()` 的 `providedIn` 属性, 而不是 `@NgModule()` 的 `providers` 数组

   10. `依赖提供者`使用 DI 令牌配置`注入器`，该注入器使用DI 令牌来提供`依赖值`的运行时版本; 
       A dependency [provider](https://angular.io/guide/glossary#provider) configures an injector with a [DI token](https://angular.io/guide/glossary#di-token)   ` dependency injection`, which that injector uses to provide the runtime version of a dependency value.
       Injectors are configured with [providers](https://angular.io/guide/glossary#provider) that associate dependencies of various types with [DI tokens](https://angular.io/guide/glossary#di-token).

   11. You can configure injectors with different providers that can provide different implementations of the same dependency.

   12. 一个dependency可以有多个provider;  ,一个DI token对应一个provider

   13. 定义provider:  `键值对`: 下面的provide充当的是键值对的键---token, useClass充当的是键值对的值--provider

       1. `providers: [Logger]`

       2. `providers:[{ provide: Logger, useClass: Logger }]`;  `[{ provide: Logger, useClass: BetterLogger }]`

       3. Configuring class providers with dependencies:   `providers:[ UserService,  { provide: Logger, useClass: EvenBetterLogger }]`    

       4. Aliasing class providers:   `providers:[ NewLogger, { provide: OldLogger, useExisting: NewLogger}]`   

          ```typescript
          //情况一
          @Component({
            selector: 'provider-6a',
            template,
            providers: [NewLogger,{ provide: OldLogger, useExisting: NewLogger }]
          })
          export class Provider6bComponent {
            constructor(newLogger: NewLogger, oldLogger: OldLogger) {
                console.log(oldLogger===newLogger)  //true
               //此时 newLogger 和 oldLogger 都共享 NewLogger 的同一个实例
            }
          }
          
          //情况二
          @Component({
            selector: 'provider-6b',
            template,
            providers: [NewLogger,{ provide: OldLogger, useExisting: NewLogger }]
          })
          export class Provider6bComponent {
            constructor(newLogger: NewLogger, oldLogger: OldLogger) {
               console.log(oldLogger===newLogger)  //false
               //此时 newLogger 和 oldLogger 是 NewLogger 两个不同的实例
            }
          }
          ```

       5. 

4. component 类可以继承自 directive 类

5. 对于引用类型, ngonchanges 比较的是引用地址是否改变, 如果引用类型的内部属性发生变化, 不会触发 ngonchanges

6. 父组件,子组件和指令共享在父组件注册的同一个 service 实例

7. 写在组件的标签上的样式不生效: `<foo-cpn style="background-color: red"></foo-cpn>`

8. 执行顺序: 同步任务-> 微任务 -> 生命周期 -> 宏任务

9. ShadowDom, None, Emulated

   - None, Emulated 都会把样式插入 header 中的 style 标签里:
     - none 成为全局样式;
     - Emulated 插入 style 标签的是使用了唯一标识符的样式, 不会影响外部组件和子组件, 但是会被外部权重更高的 css 选择器的样式影响

10. 子组件可以使用 set, get 来拦截@input 输入的属性

11. 组件交互: @Input, @Output, 本地变量(_local variable_), @Viewchild, service

12. 通过@Viewchild 被注入父组件的组件只有在 Angular 显示了父组件视图之后才能访问-`ngAfterViewInit()`

13. 组件样式

    1. 选择器`:host`, `:host-context`都是为了给宿主元素极其子元素添加样式, 而不是为了影响宿主元素以外的内容
    2. `:host ::deep div`会影响其自身以及其子组件的div; `::deep div`会作为全局样式插入style标签, 影响所有的div

14. 组件投影

    - 单插槽

    - 多插槽:  `<ng-content select="[question]"></ng-content>`
    - 有条件

15. `<ng-container>`类似react中的`<fragment>`, vue中的`<template>`, 小程序中的`<block>`

16. 指令

    1. 内置指令
       1. 属性指令: 监听并修改其它 HTML 元素和组件的行为、Attribute 和 Property。
          - 用 `ngClass` 同时添加或删除多个 CSS 类。要添加或删除*单个*类，请使用[类绑定](https://angular.cn/guide/class-binding)而不是 `NgClass`。 `NgClass`可以绑定表达式和对象
          - `NgStyle`可以绑定对象
          - `[(NgModel)="name"]`可以和访问器属性绑定`set name() {}  get name() {}`
          - `ngNonBindable`
            - 类似vue中的`v-html`, react中的`dangerouslySetInnerHTML`
            - 会使元素的子元素的插值语法, 事件绑定, 属性绑定失效
            - 作用于指令所在元素的子元素, 而不是元素本身
       2. 结构指令: 
          - 塑造或重塑 DOM 的结构;
          -  `*`其实是结构指令的简写形式; 不使用简写形式时, 结构指令必须写在`<ng-template>`标签上
          - 如果`<ng-template>`上没有运用任何结构指令, 那么`<ng-template>`的子元素将不会渲染
          - Angular 在[一个元素上只允许有一个结构型指令](https://angular.cn/guide/structural-directives#one-per-element)。
          - 内置结构指令
            - `ngIf`绑定的值只要能转化成false就不显示: null, undefined, 0 ,+0, -0, NaN, false, '', 
            - `*ngFor="let item of items;let i=index;let odd=odd; trackBy: trackByItems"`
            - `NgSwitch`, `NgSwitchCase`, `NgSwitchDefault`
       3. 自定义指令:
          1. 指令类似于把指令所在的dom结构当做一个组件使用, 使其具有组件的特点, 如生命周期, @input, 依赖注入(从而和其父组件可以共享一个service实例)等; 所以@ContentChild()既可以接收组件class, 也可以接收指令class作为参数
          2. 指令的constructor可以接收angular一些内置的类

17. 模板

    1. `(click)="onSave($event)"`、`(click)="deleteHero(hero)`

    2. 模板上下文中的名称优先于组件上下文中的名称,  Angular 会应用以下优先逻辑来确定上下文：

       1. 模板变量的名称。
       2. 指令上下文中的名称。
       3. 组件成员的名称。

    3. 属性绑定: `[attr.foo]="expression"`  expression可以是布尔值(决定是否显示foo属性), 也可以是其他赋值给foo属性的值. 

       - 例: `<tr><td [attr.colspan]="1 + 1">One-Two</td></tr>`

    4. class和style绑定

       - 单个类绑定: `[class.sale]="onSale"`
       - 绑定到多个类: [class]="classExpression"
       - 单个样式绑定:
         -  `<nav [style.background-color]="expression"></nav>`
         - `<nav [style.backgroundColor]="expression"></nav>`

       - 多个样式绑定
         - `[style]="styleExpression"`

    5. 双向绑定语法是属性绑定和事件绑定的组合的简写形式

    6. 管道操作符要比三目运算符(`?:`)的优先级高，这意味着 `a ? b : c | x` 会被解析成 `a ? b : (c | x)`。

    7. 管道能接受多个参数，就用冒号分隔这些值。比如，`{{ amount | currency:'EUR':'Euros '}}`

    8. 管道也可以串联: `{{ birthday | date | uppercase}}`

    9. 指定名称的模板变量: If the variable specifies a name on the right-hand side, such as `#var="ngModel"`, the variable refers to the directive or component on the element with a matching `exportAs` name.

    10. 模板变量的作用域: 

        - 模板变量的范围为声明它们的模板; 
        -  [结构指令](https://angular.cn/guide/built-in-directives) (诸如: `*ngIf` 和 `*ngFor` )或 `<ng-template>` 声明会创建一个新的嵌套模板范围，
        - 内部模板可以访问外模板定义的模板变量。从外部的父模板访问子范围中的变量是行不通的。

    

    ques: 子组件继承指令, 然后子组件和指令都可以使用该服务了, 且共享一个服务实例; 父子组件生命周期的执行顺序

