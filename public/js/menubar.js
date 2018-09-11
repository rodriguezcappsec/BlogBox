!(function(e, t, s) {
  "use strict";
  var n = s(t.body),
    i = s(".site-menubar");
  site.menubar = {
    top: !0,
    opened: !1,
    init: function() {
      this.change();
    },
    hide: function() {
      n.removeClass("menubar-open"), (this.opened = !1);
    },
    open: function() {
      n.addClass("menubar-open"), (this.opened = !0);
    },
    toggle: function() {
      this.opened === !0 ? this.hide() : this.open();
    },
    change: function() {
      /xs|sm|md/.test(Breakpoints.current().name)
        ? (this.switchLeft(), this.sticky.disable())
        : (this.switchTop(), this.sticky.enable());
    },
    switchLeft: function() {
      this.top === !0 && n.removeClass("menubar-top").addClass("menubar-left"),
        (this.top = !1);
    },
    switchTop: function() {
      this.top === !1 && n.removeClass("menubar-left").addClass("menubar-top"),
        (this.top = !0);
    },
    sticky: {
      enabled: !1,
      sticky: null,
      offset: 64,
      enable: function() {
        this.enabled ||
          "function" != typeof Waypoint.Sticky ||
          ((this.sticky = new Waypoint.Sticky({
            element: i,
            offset: this.offset
          })),
          (this.enabled = !0));
      },
      disable: function() {
        this.enabled && this.sticky.destroy(),
          (this.enabled = !1),
          (this.sticky = null);
      }
    },
    menu: {
      slideSpeed: 500,
      toggleOnClick: function(e) {
        /xs|sm/.test(Breakpoints.current().name) &&
          e
            .parent()
            .toggleClass("open")
            .find("> .submenu")
            .slideToggle(this.slideSpeed)
            .end()
            .siblings()
            .removeClass("open")
            .find("> .submenu")
            .slideUp(this.slideSpeed);
      }
    }
  };
})(window, document, jQuery);
