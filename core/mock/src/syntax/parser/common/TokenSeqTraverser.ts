export class TokenSeqTraverser implements StylePatch.Parser {
  constructor(tokenSeq: StylePatch.Token[], pos = 0) {
    this.pos = pos
    this.tokenSeq = tokenSeq
  }
  pos
  tokenSeq
  peek = (pos: number) => this.tokenSeq[pos]
  traced = (_: void) => this.peek(this.pos)
  seek = (p: number) => new TokenSeqTraverser(this.tokenSeq, p)
  next = (_: void) => this.seek(this.pos + 1)
}
