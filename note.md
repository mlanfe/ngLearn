1. Directives have a similar lifecycle, as Angular creates, updates, and destroys instances in the course of execution.
2. Modules, components and services are classes that use decorators. These decorators mark their type and provide metadata that tells Angular how to use them.
3. Services can depend on other services.
4. the @Injectable() decorator indicates that a component, class, pipe, or NgModule has a dependency on a service.
5. angular 把 service 作为`依赖`注入到组件中, 对于服务, provider 就是 service 本身; 使用 injector 注册 provider,以便 injector 使用 provider 来创建 service 的实例
6. 注入器会创建依赖、维护一个容器来管理这些依赖(依赖可能是服务的实例)，并尽可能复用它们。
7. 在@NgModule 中注册提供者, 服务的同一个实例将会对该 NgModule 中的所有组件可用;
   @Injectable()的 root level 中注册提供者, Angular 会为该服务创建一个单一的共享实例，并且把它注入到任何想要它的类中;
   当在组件级别注册提供者, 组件的每一个新实例依赖该服务的一个新实例;
8. component 类可以继承自 directive 类
9. 对于引用类型, ngonchanges 比较的是引用地址是否改变, 如果引用类型的内部属性发生变化, 不会触发 ngonchanges
10. 父组件,子组件和指令共享在父组件注册的同一个 service 实例
11. 执行顺序: 同步任务-> 微任务 -> 生命周期 -> 宏任务
12. ShadowDom, None, Emulated

    - None, Emulated 都会把样式插入 header 中的 style 标签里:
      - none 成为全局样式;
      - Emulated 插入 style 标签的是使用了唯一标识符的样式, 不会影响外部组件和子组件, 但是会被外部权重更高的 css 选择器的样式影响

13. 子组件可以使用 set, get 来拦截@input 输入的属性
14. 组件交互: @Input, @Output, 本地变量(_local variable_), @Viewchild, service
15. 通过@Viewchild 被注入父组件的组件只有在 Angular 显示了父组件视图之后才能访问-`ngAfterViewInit()`

ques: 父组件中注册服务的 provider, 子组件继承指令, 然后子组件和指令都可以使用该服务了, 且共享一个服务实例; 研究父子组件生命周期的执行顺序
