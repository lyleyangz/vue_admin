// Just a mock data

export const constantRoutes = [
  {
    path: "/redirect",
    component: "layout/Layout",
    hidden: true,
    children: [
      {
        path: "/redirect/:path*",
        component: "view/redirect/index"
      }
    ]
  },
  {
    path: "/login",
    component: "view/login/index",
    hidden: true
  },
  {
    path: "/auth-redirect",
    component: "view/login/auth-redirect",
    hidden: true
  },
  {
    path: "/404",
    component: "view/error-page/404",
    hidden: true
  },
  {
    path: "/401",
    component: "view/error-page/401",
    hidden: true
  },
  {
    path: "",
    component: "layout/Layout",
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        component: "view/dashboard/index",
        name: "Dashboard",
        meta: {title: "仪表板", icon: "dashboard", affix: true}
      }
    ]
  },
  {
    path: "/documentation",
    component: "layout/Layout",
    children: [
      {
        path: "index",
        component: "view/documentation/index",
        name: "Documentation",
        meta: {title: "Documentation", icon: "documentation", affix: true}
      }
    ]
  },
  {
    path: "/guide",
    component: "layout/Layout",
    redirect: "/guide/index",
    children: [
      {
        path: "index",
        component: "view/guide/index",
        name: "Guide",
        meta: {title: "Guide", icon: "guide", noCache: true}
      }
    ]
  }
];

export const asyncRoutes = [
  {
    path: "/permission",
    component: "layout/Layout",
    redirect: "/permission/index",
    alwaysShow: true,
    meta: {
      title: "Permission",
      icon: "lock",
      roles: ["admin", "editor"]
    },
    children: [
      {
        path: "page",
        component: "view/permission/page",
        name: "PagePermission",
        meta: {
          title: "Page Permission",
          roles: ["admin"]
        }
      },
      {
        path: "directive",
        component: "view/permission/directive",
        name: "DirectivePermission",
        meta: {
          title: "Directive Permission"
        }
      },
      {
        path: "role",
        component: "view/permission/role",
        name: "RolePermission",
        meta: {
          title: "Role Permission",
          roles: ["admin"]
        }
      }
    ]
  },

  {
    path: "/icon",
    component: "layout/Layout",
    children: [
      {
        path: "index",
        component: "view/icons/index",
        name: "Icons",
        meta: {title: "Icons", icon: "icon", noCache: true}
      }
    ]
  },

  {
    path: "/components",
    component: "layout/Layout",
    redirect: "noRedirect",
    name: "ComponentDemo",
    meta: {
      title: "Components",
      icon: "component"
    },
    children: [
      {
        path: "tinymce",
        component: "view/components-demo/tinymce",
        name: "TinymceDemo",
        meta: {title: "Tinymce"}
      },
      {
        path: "markdown",
        component: "view/components-demo/markdown",
        name: "MarkdownDemo",
        meta: {title: "Markdown"}
      },
      {
        path: "json-editor",
        component: "view/components-demo/json-editor",
        name: "JsonEditorDemo",
        meta: {title: "Json Editor"}
      },
      {
        path: "split-pane",
        component: "view/components-demo/split-pane",
        name: "SplitpaneDemo",
        meta: {title: "SplitPane"}
      },
      {
        path: "avatar-upload",
        component: "view/components-demo/avatar-upload",
        name: "AvatarUploadDemo",
        meta: {title: "Avatar Upload"}
      },
      {
        path: "dropzone",
        component: "view/components-demo/dropzone",
        name: "DropzoneDemo",
        meta: {title: "Dropzone"}
      },
      {
        path: "sticky",
        component: "view/components-demo/sticky",
        name: "StickyDemo",
        meta: {title: "Sticky"}
      },
      {
        path: "count-to",
        component: "view/components-demo/count-to",
        name: "CountToDemo",
        meta: {title: "Count To"}
      },
      {
        path: "mixin",
        component: "view/components-demo/mixin",
        name: "ComponentMixinDemo",
        meta: {title: "componentMixin"}
      },
      {
        path: "back-to-top",
        component: "view/components-demo/back-to-top",
        name: "BackToTopDemo",
        meta: {title: "Back To Top"}
      },
      {
        path: "drag-dialog",
        component: "view/components-demo/drag-dialog",
        name: "DragDialogDemo",
        meta: {title: "Drag Dialog"}
      },
      {
        path: "drag-select",
        component: "view/components-demo/drag-select",
        name: "DragSelectDemo",
        meta: {title: "Drag Select"}
      },
      {
        path: "dnd-list",
        component: "view/components-demo/dnd-list",
        name: "DndListDemo",
        meta: {title: "Dnd List"}
      },
      {
        path: "drag-kanban",
        component: "view/components-demo/drag-kanban",
        name: "DragKanbanDemo",
        meta: {title: "Drag Kanban"}
      }
    ]
  },
  {
    path: "/charts",
    component: "layout/Layout",
    redirect: "noRedirect",
    name: "Charts",
    meta: {
      title: "Charts",
      icon: "chart"
    },
    children: [
      {
        path: "keyboard",
        component: "view/charts/keyboard",
        name: "KeyboardChart",
        meta: {title: "Keyboard Chart", noCache: true}
      },
      {
        path: "line",
        component: "view/charts/line",
        name: "LineChart",
        meta: {title: "Line Chart", noCache: true}
      },
      {
        path: "mixchart",
        component: "view/charts/mixChart",
        name: "MixChart",
        meta: {title: "Mix Chart", noCache: true}
      }
    ]
  },
  {
    path: "/nested",
    component: "layout/Layout",
    redirect: "/nested/menu1/menu1-1",
    name: "Nested",
    meta: {
      title: "Nested",
      icon: "nested"
    },
    children: [
      {
        path: "menu1",
        component: "view/nested/menu1/index",
        name: "Menu1",
        meta: {title: "Menu1"},
        redirect: "/nested/menu1/menu1-1",
        children: [
          {
            path: "menu1-1",
            component: "view/nested/menu1/menu1-1",
            name: "Menu1-1",
            meta: {title: "Menu1-1"}
          },
          {
            path: "menu1-2",
            component: "view/nested/menu1/menu1-2",
            name: "Menu1-2",
            redirect: "/nested/menu1/menu1-2/menu1-2-1",
            meta: {title: "Menu1-2"},
            children: [
              {
                path: "menu1-2-1",
                component: "view/nested/menu1/menu1-2/menu1-2-1",
                name: "Menu1-2-1",
                meta: {title: "Menu1-2-1"}
              },
              {
                path: "menu1-2-2",
                component: "view/nested/menu1/menu1-2/menu1-2-2",
                name: "Menu1-2-2",
                meta: {title: "Menu1-2-2"}
              }
            ]
          },
          {
            path: "menu1-3",
            component: "view/nested/menu1/menu1-3",
            name: "Menu1-3",
            meta: {title: "Menu1-3"}
          }
        ]
      },
      {
        path: "menu2",
        name: "Menu2",
        component: "view/nested/menu2/index",
        meta: {title: "Menu2"}
      }
    ]
  },

  {
    path: "/example",
    component: "layout/Layout",
    redirect: "/example/list",
    name: "Example",
    meta: {
      title: "Example",
      icon: "example"
    },
    children: [
      {
        path: "create",
        component: "view/example/create",
        name: "CreateArticle",
        meta: {title: "Create Article", icon: "edit"}
      },
      {
        path: "edit/:id(\\d+)",
        component: "view/example/edit",
        name: "EditArticle",
        meta: {title: "Edit Article", noCache: true},
        hidden: true
      },
      {
        path: "list",
        component: "view/example/list",
        name: "ArticleList",
        meta: {title: "Article List", icon: "list"}
      }
    ]
  },

  {
    path: "/tab",
    component: "layout/Layout",
    children: [
      {
        path: "index",
        component: "view/tab/index",
        name: "Tab",
        meta: {title: "Tab", icon: "tab"}
      }
    ]
  },

  {
    path: "/error",
    component: "layout/Layout",
    redirect: "noRedirect",
    name: "ErrorPages",
    meta: {
      title: "Error Pages",
      icon: "404"
    },
    children: [
      {
        path: "401",
        component: "view/error-page/401",
        name: "Page401",
        meta: {title: "Page 401", noCache: true}
      },
      {
        path: "404",
        component: "view/error-page/404",
        name: "Page404",
        meta: {title: "Page 404", noCache: true}
      }
    ]
  },

  {
    path: "/error-log",
    component: "layout/Layout",
    redirect: "noRedirect",
    children: [
      {
        path: "log",
        component: "view/error-log/index",
        name: "ErrorLog",
        meta: {title: "Error Log", icon: "bug"}
      }
    ]
  },

  {
    path: "/excel",
    component: "layout/Layout",
    redirect: "/excel/export-excel",
    name: "Excel",
    meta: {
      title: "Excel",
      icon: "excel"
    },
    children: [
      {
        path: "export-excel",
        component: "view/excel/export-excel",
        name: "ExportExcel",
        meta: {title: "Export Excel"}
      },
      {
        path: "export-selected-excel",
        component: "view/excel/select-excel",
        name: "SelectExcel",
        meta: {title: "Select Excel"}
      },
      {
        path: "export-merge-header",
        component: "view/excel/merge-header",
        name: "MergeHeader",
        meta: {title: "Merge Header"}
      },
      {
        path: "upload-excel",
        component: "view/excel/upload-excel",
        name: "UploadExcel",
        meta: {title: "Upload Excel"}
      }
    ]
  },

  {
    path: "/zip",
    component: "layout/Layout",
    redirect: "/zip/download",
    alwaysShow: true,
    meta: {title: "Zip", icon: "zip"},
    children: [
      {
        path: "download",
        component: "view/zip/index",
        name: "ExportZip",
        meta: {title: "Export Zip"}
      }
    ]
  },

  {
    path: "/pdf",
    component: "layout/Layout",
    redirect: "/pdf/index",
    children: [
      {
        path: "index",
        component: "view/pdf/index",
        name: "PDF",
        meta: {title: "PDF", icon: "pdf"}
      }
    ]
  },
  {
    path: "/pdf/download",
    component: "view/pdf/download",
    hidden: true
  },

  {
    path: "/theme",
    component: "layout/Layout",
    redirect: "noRedirect",
    children: [
      {
        path: "index",
        component: "view/theme/index",
        name: "Theme",
        meta: {title: "Theme", icon: "theme"}
      }
    ]
  },

  {
    path: "/clipboard",
    component: "layout/Layout",
    redirect: "noRedirect",
    children: [
      {
        path: "index",
        component: "view/clipboard/index",
        name: "ClipboardDemo",
        meta: {title: "Clipboard Demo", icon: "clipboard"}
      }
    ]
  },

  {
    path: "/i18n",
    component: "layout/Layout",
    children: [
      {
        path: "index",
        component: "view/i18n-demo/index",
        name: "I18n",
        meta: {title: "I18n", icon: "international"}
      }
    ]
  },

  {
    path: "external-link",
    component: "layout/Layout",
    children: [
      {
        path: "https://github.com/PanJiaChen/vue-element-admin",
        meta: {title: "External Link", icon: "link"}
      }
    ]
  },

  {path: "*", redirect: "/404", hidden: true}
];
