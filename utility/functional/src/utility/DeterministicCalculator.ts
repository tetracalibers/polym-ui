import RecursiveObject from '../object/RecursiveObject'

export default class DeterministicCalculator extends RecursiveObject {
  num = n => {
    // 数値の式
    return pattern => {
      return pattern.num(n)
    }
  }

  add = (exp1, exp2) => {
    // 足し算の式
    return pattern => {
      return pattern.add(exp1, exp2)
    }
  }

  mul = (exp1: number, exp2: number) => {
    return (pattern: any) => {
      return pattern.mul(exp1, exp2)
    }
  }

  /**
   * 数式を再帰的に計算する
   * @module calculate
   */
  calculate = anExp => {
    return this.match(anExp, {
      num: n => {
        // 数値を評価する
        return n
      },
      add: (exp1, exp2) => {
        // 足し算の式を評価する
        return this.calculate(exp1) + this.calculate(exp2)
      },
    })
  }
}
