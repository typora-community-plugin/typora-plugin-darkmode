import './style.scss'
import { I18n, Plugin, path } from '@typora-community-plugin/core'
import * as Locale from './locales/lang.en.json'


export default class extends Plugin {

  i18n = new I18n<typeof Locale>({
    localePath: path.join(this.manifest.dir!, 'locales')
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
