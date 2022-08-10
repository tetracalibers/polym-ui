import 'zx/globals'
;(async () => {
  class AutoMerger {
    public static autoMerger: AutoMerger
    private currentBranch: string

    private constructor() {
      this.currentBranch = ''
    }

    public static get Instance(): AutoMerger {
      return this.autoMerger || (this.autoMerger = new this())
    }

    private async setCurrentBranch(): Promise<boolean> {
      const showResult = await $`git branch --show-current`
      this.currentBranch = showResult.toString().replace(/\r?\n/g, '')
      return true
    }

    private async yesOrNo(): Promise<string> {
      return await question('> (y = yes | q = cancel)：')
    }

    private async execMerge(): Promise<boolean> {
      await $`git push origin ${this.currentBranch}`
      await $`git checkout main`
      await $`git merge ${this.currentBranch}`
      await $`git push origin main`
      await $`git checkout ${this.currentBranch}`
      return true
    }

    private async wantToMerge(): Promise<boolean> {
      const willingnessToMerge = await this.yesOrNo()
      switch (willingnessToMerge) {
        case 'y' || 'yes':
          return true
        case 'q' || 'cancel':
          return false
        default:
          console.log('yかqで答えてください')
          return this.wantToMerge()
      }
    }

    public async boot(): Promise<boolean> {
      await this.setCurrentBranch()
      console.log(
        `現在のブランチは${this.currentBranch}です。mainにマージしますか？`
      )
      const merge = await this.wantToMerge()
      return merge ? await this.execMerge() : false
    }
  }

  await AutoMerger.Instance.boot()
})()
