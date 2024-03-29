const App = Vue.createApp({
  data() {
    return {
      name: "Luyao He",
      selectedSection: "home",
      menuItems: [
        { text: "Home", section: "home" },
        { text: "About", section: "about" },
        { text: "Projects", section: "projects" },
      ],
      projects: [
        {
          title: "快乐农场",
          description: "为低龄儿童设计的互动网页小游戏，模拟农场经营。",
          link: "https://codepen.io/lh3220/pen/MWRjxgb",
          image:      "https://assets.codepen.io/10914207/Screenshot+2024-03-20+at+5.27.42%E2%80%AFPM.png",
          features: [
            "前端网页设计: 在Codepen编程平台上，使用HTML5构建页面的结构; CSS3和Bootstrap库用于页面的布局和设计农场风格; Javascript用于动态互动和功能实现，例如喂养、售出动物，和展示动物成长阶段等。",
            "Web App开发: 使用Vue.js作为主要的前端JavaScript框架，通过组件化的方式构建用户界面，例如管理动物数量和种类;通过Google Firebase提供的API来处理前端和后端之间的数据交互，例如登录信息，和收入情况。",
            "项目难点: 设计并开发了一个游戏启动页，该页面集成了登录功能，并能够与云端同步用户的游戏进度。通过使用大量的函数来避免按钮之间的冲突，并实现了生成新生命的功能。"
          ]
        },
        {
          title: "现代艺术还原",
          description:
            "一个网页版的艺术重创活动，重新创作Piet Mondrian的经典作品《红、蓝、黄组合》。",
          link: "https://codepen.io/lh3220/pen/eYoBogj",
          image:
            "https://assets.codepen.io/10914207/Screenshot+2024-03-20+at+5.51.35%E2%80%AFPM.png",
          features:[
            "动态组件创建：利用Vue.js的v-for指令动态生成艺术作品中的不同颜色和尺寸的方块组件，这些组件模拟了Mondrian的画作布局。",
"响应式设计：通过flex布局实现艺术介绍和组件艺术再创作部分的并排显示，增强了页面的视觉效果和用户体验。",
"布局挑战：在创作过程中，最初的尝试导致所有组件垂直堆叠，与Mondrian作品的布局不符。难点在于利用Vue.js默认的v-for行为很难实现预期的行布局。",
]
        },
        {
          title: "海战小游戏",
          description:
            "一个基于网页的“海战”游戏，玩家的目标是在有限的尝试次数内，找出并击中所有隐藏的船只。",
          link: "https://codepen.io/lh3220/pen/yLrVrXj",
          image: "https://assets.codepen.io/10914207/Screenshot+2024-03-20+at+6.12.05%E2%80%AFPM.png",
        features:[
          "动态生成的游戏板：游戏板是通过JavaScript动态生成的，确保了每次游戏开始时船只的位置都是随机的，增加了游戏的可玩性和挑战性。",
                  "交互式界面：玩家可以直接点击游戏板上的单元格来“射击”。每次射击后，界面会即时更新显示射击的结果，包括击中船只或者射击落空。",
               "分数和尝试次数跟踪：游戏通过在页面上显示当前得分和尝试次数来跟踪玩家的进度。当玩家击中所有的船只时，游戏结束。",
        ]
        },

        {
          title: "Job-To-Do",
          description:
            "专为在校生设计的移动学习平台，旨在提供全面的职业发展和求职策略。",
          link:  "https://www.figma.com/file/rUIbzjZbJpQuFwiTnjajIE/Job-to-do?type=design&node-id=0%3A1&mode=design&t=eQtUBj0pg1Hhh3or-1",
          image:       "https://assets.codepen.io/10914207/Screenshot+2024-03-20+at+6.09.35%E2%80%AFPM.png",
          features:[
            "用户研究：确定了三类主要用户画像：在校生、应届生，以及寻求跳槽机会的在职员工。通过深入的研究和访谈，我们分析了目标用户群体的具体需求，并利用SWOT分析方法评估了市场上现有的求职软件。",
       "App设计: 在App设计阶段，采用了用户旅程图和流程图来规划产品的功能和用户交互流程。利用Figma工具，我们不仅完成了软件原型的界面设计，还模拟了用户在使用过程中的交互场景，确保我们的设计既直观又易于操作。",
            '获取更多项目信息：点击<a href="https://www.figma.com/file/arE4pSWzIRLdASEBmjmPwp/Job-To-Do?type=whiteboard&node-id=0%3A1&t=7DhuHpCZIhN0tere-1">FigJam</a> 查看用户旅程图，流程图，用户画像等具体内容',
            'Job-to-do Demo展示（英文版）<a href="https://www.canva.com/design/DAF94d-igTA/rSrCuY8UOK75sCyFTjgOiw/edit">Job-To-Do 介绍</a>'
          ]
        }
      ]
    };
  },
  methods: {
    selectSection(section) {
      this.selectedSection = section;
    }
  }
});

App.mount("#app");