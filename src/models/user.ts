/** ユーザ（公開情報） */
export interface User {
  account_id: string
  user_id: string
  user_name: string
  user_icon?: string
}

/** 非公開情報（会員登録とかマイページとか） */
export interface UserData extends User {
  user_pass: string
  user_mail: string
}

/**
 * ユーザIDは一意だが変更可能
 * ＠user_id
 * tanabe_kenta
 *
 * アカウントIDは変更不可な文字列。内部処理で使う
 * account_id
 * /twitter/102329403503425920/
 */
