import './style.scss'
import { I18n, Plugin } from '@typora-community-plugin/core'


export default class extends Plugin {

  i18n = new I18n({
    resources: {
      'en': {
        toggleButton: 'Toggle Dark Mode',
        enable: 'Enable',
        disable: 'Disable',
      },
      'zh-cn': {
        toggleButton: '切换暗黑模式',
        enable: '启用暗黑模式',
        disable: '禁用暗黑模式',
      },
    }
  })

  onload() {
    const { t } = this.i18n

    this.registerCommand({
      id: 'darkmode.enable',
      title: t.enable,
      scope: 'global',
      callback: () => this.enable(),
    })
    this.registerCommand({
      id: 'darkmode.disable',
      title: t.disable,
      scope: 'global',
      callback: () => this.disable(),
    })

    const statusItem = this.addStatusBarItem({
      position: 'right',
      hint: t.toggleButton,
    })
    $(statusItem)
      .append(
        '<i class="fa fa-moon-o"></i>',
        '<i class="fa fa-sun-o"></i>',
      )
      .on('click', () => {
        this.isDarkMode()
          ? this.disable()
          : this.enable()
      })
  }

  isDarkMode() {
    return $('html').hasClass('typ-darkmode')
  }

  enable() {
    $('html').addClass('typ-darkmode')
  }

  disable() {
    $('html').removeClass('typ-darkmode')
  }
}
