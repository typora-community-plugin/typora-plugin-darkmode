import './style.scss'
import { I18n, Plugin } from '@typora-community-plugin/core'


export default class extends Plugin {

  i18n = new I18n({
    resources: {
      'en': {
        'enable': 'Enable',
        'disable': 'Disable',
      },
      'zh-cn': {
        'enable': '启用暗黑模式',
        'disable': '禁用暗黑模式',
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
  }

  enable() {
    $('body').addClass('typ-darkmode')
  }

  disable() {
    $('body').removeClass('typ-darkmode')
  }
}
