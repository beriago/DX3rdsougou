// =========================
// データ
// =========================

let works = [

  {
    "id": "elementary_student",
    "name": "小学生",
    "category": "一般",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "知覚", "level": 2 },
      { "name": "意志", "level": 1 },
      { "name": "RC", "level": 1 },
      { "name": "情報:噂話", "level": 1 }
    ]
  },
  {
    "id": "junior_high_student",
    "name": "中学生",
    "category": "一般",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "知覚", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "RC", "level": 2 },
      { "name": "情報:噂話", "level": 1 }
    ]
  },
  {
    "id": "high_school_student",
    "name": "高校生",
    "category": "一般",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "回避", "level": 1 },
      { "name": "知覚", "level": 1 },
      { "name": "RC", "level": 2 },
      { "name": "情報:噂話", "level": 1 }
    ]
  },
  {
    "id": "delinquent_student",
    "name": "不良学生",
    "category": "一般",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 1 },
      { "name": "運転:", "level": 2 },
      { "name": "知覚", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "情報:裏社会", "level": 1 }
    ]
  },
  {
    "id": "college_student",
    "name": "大学生",
    "category": "一般",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "回避", "level": 1 },
      { "name": "運転:", "level": 2 },
      { "name": "意志", "level": 1 },
      { "name": "知識:", "level": 2 },
      { "name": "情報:学問", "level": 1 }
    ]
  },
  {
    "id": "freeter",
    "name": "フリーター",
    "category": "一般",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 1 },
      { "name": "運転:", "level": 2 },
      { "name": "意志", "level": 1 },
      { "name": "知識:", "level": 2 },
      { "name": "情報:ウェブ", "level": 1 }
    ]
  },
  {
    "id": "teacher",
    "name": "教師",
    "category": "一般",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "運転:", "level": 2 },
      { "name": "知識:", "level": 2 },
      { "name": "交渉", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "情報:学問", "level": 1 }
    ]
  },
  {
    "id": "homemaker",
    "name": "主婦・主夫",
    "category": "一般",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "芸術:", "level": 2 },
      { "name": "意志", "level": 1 },
      { "name": "交渉", "level": 2 },
      { "name": "情報:噂話", "level": 1 }
    ]
  },
  {
    "id": "ugn_child_a",
    "name": "UGNチルドレンA",
    "category": "UGN",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 2 },
      { "name": "回避", "level": 1 },
      { "name": "RC", "level": 1 },
      { "name": "情報:UGN", "level": 1 }
    ]
  },
  {
    "id": "ugn_child_b",
    "name": "UGNチルドレンB",
    "category": "UGN",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "回避", "level": 1 },
      { "name": "射撃", "level": 2 },
      { "name": "RC", "level": 1 },
      { "name": "情報:UGN", "level": 1 }
    ]
  },
  {
    "id": "ugn_child_c",
    "name": "UGNチルドレンC",
    "category": "UGN",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "回避", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "RC", "level": 2 },
      { "name": "情報:UGN", "level": 1 }
    ]
  },
  {
    "id": "ugn_agent_a",
    "name": "UGNエージェントA",
    "category": "UGN",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 1 },
      { "name": "回避", "level": 1 },
      { "name": "RC", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "情報:UGN", "level": 1 }
    ]
  },
  {
    "id": "ugn_agent_b",
    "name": "UGNエージェントB",
    "category": "UGN",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "射撃", "level": 1 },
      { "name": "知覚", "level": 1 },
      { "name": "RC", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "情報:UGN", "level": 1 }
    ]
  },
  {
    "id": "ugn_agent_c",
    "name": "UGNエージェントC",
    "category": "UGN",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "意志", "level": 1 },
      { "name": "RC", "level": 1 },
      { "name": "知識:", "level": 2 },
      { "name": "調達", "level": 1 }
    ]
  },
  {
    "id": "ugn_agent_d",
    "name": "UGNエージェントD",
    "category": "UGN",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "知覚", "level": 1 },
      { "name": "交渉", "level": 1 },
      { "name": "RC", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "情報:UGN", "level": 1 }
    ]
  },
  {
    "id": "ugn_branch_a",
    "name": "UGN支部長A",
    "category": "UGN",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 1 },
      { "name": "回避", "level": 1 },
      { "name": "運転:", "level": 2 },
      { "name": "調達", "level": 1 },
      { "name": "情報:UGN", "level": 1 }
    ]
  },
  {
    "id": "ugn_branch_b",
    "name": "UGN支部長B",
    "category": "UGN",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "回避", "level": 1 },
      { "name": "射撃", "level": 1 },
      { "name": "知覚", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "情報:UGN", "level": 1 }
    ]
  },
  {
    "id": "ugn_branch_c",
    "name": "UGN支部長C",
    "category": "UGN",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "RC", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "知識:", "level": 2 },
      { "name": "調達", "level": 1 },
      { "name": "情報:UGN", "level": 1 }
    ]
  },
  {
    "id": "ugn_branch_d",
    "name": "UGN支部長D",
    "category": "UGN",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "意志", "level": 1 },
      { "name": "交渉", "level": 1 },
      { "name": "調達", "level": 2 },
      { "name": "情報:UGN", "level": 1 }
    ]
  },
  {
    "id": "detective_police",
    "name": "刑事",
    "category": "一般",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "運転:", "level": 2 },
      { "name": "射撃", "level": 1 },
      { "name": "知覚", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "情報:裏社会", "level": 1 }
    ]
  },
  {
    "id": "forensics",
    "name": "鑑識",
    "category": "一般",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "運転:", "level": 2 },
      { "name": "知覚", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "知識:", "level": 2 },
      { "name": "情報:裏社会", "level": 1 }
    ]
  },
  {
    "id": "lawyer",
    "name": "弁護士",
    "category": "一般",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "運転:", "level": 2 },
      { "name": "意志", "level": 1 },
      { "name": "知識:", "level": 2 },
      { "name": "交渉", "level": 1 },
      { "name": "情報:裏社会", "level": 1 }
    ]
  },
  {
    "id": "defense_force",
    "name": "防衛隊員",
    "category": "一般",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 1 },
      { "name": "回避", "level": 1 },
      { "name": "運転:", "level": 2 },
      { "name": "射撃", "level": 1 },
      { "name": "情報:軍事", "level": 1 }
    ]
  },
  {
    "id": "mercenary",
    "name": "傭兵",
    "category": "一般",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 1 },
      { "name": "運転:", "level":2 },
      { "name": "射撃", "level": 1 },
      { "name": "知覚", "level": 1 },
      { "name": "情報:軍事", "level": 1 }
    ]
  },
  {
    "id": "researcher",
    "name": "研究者",
    "category": "一般",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "知覚", "level": 1 },
      { "name": "知識:", "level": 4 },
      { "name": "調達", "level": 1 },
      { "name": "情報:学問", "level": 1 }
    ]
  },
  {
    "id": "professor",
    "name": "教授",
    "category": "一般",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "意志", "level": 2 },
      { "name": "知識:", "level": 2 },
      { "name": "交渉", "level": 1 },
      { "name": "情報:学問", "level": 1 }
    ]
  },
  {
    "id": "nurse",
    "name": "看護師",
    "category": "一般",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "知覚", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "知識:", "level": 2 },
      { "name": "交渉", "level": 1 }
    ]
  },
  {
    "id": "doctor",
    "name": "医者",
    "category": "一般",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "RC", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "知識:", "level": 4 },
      { "name": "情報:学問", "level": 1 }
    ]
  },
  {
    "id": "fh_agent_a",
    "name": "FHエージェントA",
    "category": "FH",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 1 },
      { "name": "回避", "level": 1 },
      { "name": "RC", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "fh_agent_b",
    "name": "FHエージェントB",
    "category": "FH",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "射撃", "level": 1 },
      { "name": "知覚", "level": 1 },
      { "name": "RC", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "fh_agent_c",
    "name": "FHエージェントC",
    "category": "FH",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "意志", "level": 1 },
      { "name": "RC", "level": 1 },
      { "name": "知識:", "level": 2 },
      { "name": "調達", "level": 1 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "fh_agent_d",
    "name": "FHエージェントD",
    "category": "FH",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "知覚", "level": 1 },
      { "name": "RC", "level": 1 },
      { "name": "交渉", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "fh_child_a",
    "name": "FHチルドレンA",
    "category": "FH",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 2 },
      { "name": "回避", "level": 1 },
      { "name": "RC", "level": 1 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "fh_child_b",
    "name": "FHチルドレンB",
    "category": "FH",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "回避", "level": 1 },
      { "name": "射撃", "level": 2 },
      { "name": "RC", "level": 1 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "fh_child_c",
    "name": "FHチルドレンC",
    "category": "FH",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "回避", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "RC", "level": 2 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "fh_cell_leader_a",
    "name": "FHセルリーダーA",
    "category": "FH",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 1 },
      { "name": "回避", "level": 1 },
      { "name": "運転:", "level": 2 },
      { "name": "調達", "level": 1 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "fh_cell_leader_b",
    "name": "FHセルリーダーB",
    "category": "FH",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "回避", "level": 1 },
      { "name": "射撃", "level": 1 },
      { "name": "知覚", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "fh_cell_leader_c",
    "name": "FHセルリーダーC",
    "category": "FH",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "RC", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "知識:", "level": 2 },
      { "name": "調達", "level": 1 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "fh_cell_leader_d",
    "name": "FHセルリーダーD",
    "category": "FH",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "意志", "level": 1 },
      { "name": "交渉", "level": 1 },
      { "name": "調達", "level": 2 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "renegade_being_a",
    "name": "レネゲイドビーイングA",
    "category": "RB",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 1 },
      { "name": "回避", "level": 1 },
      { "name": "射撃", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "情報:UGN", "level": 1 }
    ]
  },
  {
    "id": "renegade_being_b",
    "name": "レネゲイドビーイングB",
    "category": "RB",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 1 },
      { "name": "射撃", "level": 1 },
      { "name": "知覚", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "情報:UGN", "level": 1 }
    ]
  },
  {
    "id": "renegade_being_c",
    "name": "レネゲイドビーイングC",
    "category": "RB",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "知覚", "level": 1 },
      { "name": "RC", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "交渉", "level": 1 },
      { "name": "情報:UGN", "level": 1 }
    ]
  },
  {
    "id": "renegade_being_d",
    "name": "レネゲイドビーイングD",
    "category": "RB",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "回避", "level": 1 },
      { "name": "RC", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "交渉", "level": 1 },
      { "name": "情報:UGN", "level": 1 }
    ]
  },
  {
    "id": "fh_mercenary_a",
    "name": "FHマーセナリーA",
    "category": "FH",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 1 },
      { "name": "運転:", "level": 2 },
      { "name": "知覚", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "fh_mercenary_b",
    "name": "FHマーセナリーB",
    "category": "FH",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "射撃", "level": 1 },
      { "name": "知覚", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "fh_mercenary_c",
    "name": "FHマーセナリーC",
    "category": "FH",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "知覚", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "RC", "level": 1 },
      { "name": "知識:", "level": 2 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "fh_mercenary_d",
    "name": "FHマーセナリーD",
    "category": "FH",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "意志", "level": 1 },
      { "name": "交渉", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "情報:", "level": 2 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "fh_renegade_being_a",
    "name": "FHレネゲイドビーイングA",
    "category": "FH",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 1 },
      { "name": "回避", "level": 1 },
      { "name": "射撃", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "fh_renegade_being_b",
    "name": "FHレネゲイドビーイングB",
    "category": "FH",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 1 },
      { "name": "射撃", "level": 1 },
      { "name": "知覚", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "fh_renegade_being_c",
    "name": "FHレネゲイドビーイングC",
    "category": "FH",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "知覚", "level": 1 },
      { "name": "RC", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "交渉", "level": 1 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "fh_renegade_being_d",
    "name": "FHレネゲイドビーイングD",
    "category": "FH",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "回避", "level": 1 },
      { "name": "RC", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "交渉", "level": 1 },
      { "name": "情報:FH", "level": 1 }
    ]
  },
  {
    "id": "politician",
    "name": "政治家",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "意志", "level": 1 },
      { "name": "交渉", "level": 2 },
      { "name": "調達", "level": 1 },
      { "name": "情報:裏社会", "level": 1 }
    ]
  },
  {
    "id": "businessman",
    "name": "ビジネスマン",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "運転:", "level": 2 },
      { "name": "意志", "level": 1 },
      { "name": "交渉", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "情報:ウェブ", "level": 1 }
    ]
  },
  {
    "id": "executive",
    "name": "エグゼクティブ",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "運転:", "level": 2 },
      { "name": "意志", "level": 1 },
      { "name": "調達", "level": 2 },
      { "name": "情報:ウェブ", "level": 1 }
    ]
  },
  {
    "id": "nightlife_worker",
    "name": "水商売",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "意志", "level": 2 },
      { "name": "知覚", "level": 1 },
      { "name": "交渉", "level": 1 },
      { "name": "情報:噂話", "level": 1 }
    ]
  },
  {
    "id": "shopkeeper",
    "name": "商店主",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "運転:", "level": 2 },
      { "name": "意志", "level": 2 },
      { "name": "調達", "level": 1 },
      { "name": "情報:噂話", "level": 1 }
    ]
  },
  {
    "id": "religious_leader",
    "name": "宗教家",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "意志", "level": 1 },
      { "name": "知覚", "level": 1 },
      { "name": "交渉", "level": 2 },
      { "name": "情報:噂話", "level": 1 }
    ]
  },
  {
    "id": "detective",
    "name": "探偵",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "運転:", "level": 2 },
      { "name": "知覚", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "情報:", "level": 3 }
    ]
  },
  {
    "id": "bodyguard",
    "name": "ボディーガード",
    "category": "一般社会",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 1 },
      { "name": "回避", "level": 1 },
      { "name": "運転:", "level": 2 },
      { "name": "知覚", "level": 1 },
      { "name": "情報:裏社会", "level": 1 }
    ]
  },
  {
    "id": "driver",
    "name": "ドライバー",
    "category": "一般社会",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "運転:", "level": 4 },
      { "name": "意志", "level": 1 },
      { "name": "交渉", "level": 1 },
      { "name": "情報:噂話", "level": 1 }
    ]
  },
  {
    "id": "yakuza",
    "name": "ヤクザ",
    "category": "一般社会",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 1 },
      { "name": "運転:", "level": 2 },
      { "name": "意志", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "情報:裏社会", "level": 1 }
    ]
  },
  {
    "id": "mafia",
    "name": "マフィア",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "運転:", "level": 2 },
      { "name": "射撃", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "交渉", "level": 1 },
      { "name": "情報:裏社会", "level": 1 }
    ]
  },
  {
    "id": "thief",
    "name": "泥棒",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "回避", "level": 1 },
      { "name": "運転:", "level": 2 },
      { "name": "知覚", "level": 1 },
      { "name": "知識:", "level": 2 },
      { "name": "情報:裏社会", "level": 1 }
    ]
  },
  {
    "id": "negotiator",
    "name": "ネゴシエーター",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "意志", "level": 1 },
      { "name": "交渉", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "情報:", "level": 3 }
    ]
  },
  {
    "id": "assassin",
    "name": "暗殺者",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 1 },
      { "name": "運転:", "level": 2 },
      { "name": "射撃", "level": 1 },
      { "name": "知識:", "level": 2 },
      { "name": "情報:裏社会", "level": 1 }
    ]
  },
  {
    "id": "fortune_teller",
    "name": "占い師",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "知覚", "level": 1 },
      { "name": "芸術:", "level": 2 },
      { "name": "意志", "level": 1 },
      { "name": "交渉", "level": 1 },
      { "name": "情報:噂話", "level": 1 }
    ]
  },
  {
    "id": "artist",
    "name": "アーティスト",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "知覚", "level": 1 },
      { "name": "芸術:", "level": 2 },
      { "name": "意志", "level": 2 },
      { "name": "情報:ウェブ", "level": 1 }
    ]
  },
  {
    "id": "singer",
    "name": "歌手",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "芸術:", "level": 2 },
      { "name": "意志", "level": 1 },
      { "name": "知識:", "level": 2 },
      { "name": "交渉", "level": 1 },
      { "name": "情報:ウェブ", "level": 1 }
    ]
  },
  {
    "id": "actor",
    "name": "俳優",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "芸術:", "level": 2 },
      { "name": "回避", "level": 1 },
      { "name": "運転:", "level": 2 },
      { "name": "交渉", "level": 1 },
      { "name": "情報:ウェブ", "level": 1 }
    ]
  },
  {
    "id": "illusionist",
    "name": "奇術師",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "回避", "level": 1 },
      { "name": "知覚", "level": 1 },
      { "name": "芸術:", "level": 2 },
      { "name": "知識:", "level": 2 },
      { "name": "情報:噂話", "level": 1 }
    ]
  },
  {
    "id": "athlete",
    "name": "アスリート",
    "category": "一般社会",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "回避", "level": 2 },
      { "name": "知覚", "level": 1 },
      { "name": "意志", "level": 1 },
      { "name": "情報:噂話", "level": 1 }
    ]
  },
  {
    "id": "fighter",
    "name": "格闘家",
    "category": "一般社会",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 2 },
      { "name": "回避", "level": 1 },
      { "name": "知覚", "level": 1 },
      { "name": "情報:噂話", "level": 1 }
    ]
  },
  {
    "id": "journalist",
    "name": "記者",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "運転:", "level": 2 },
      { "name": "知覚", "level": 1 },
      { "name": "知識:", "level": 2 },
      { "name": "交渉", "level": 1 },
      { "name": "情報:ウェブ", "level": 1 }
    ]
  },
  {
    "id": "announcer",
    "name": "アナウンサー",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "芸術:", "level": 2 },
      { "name": "意志", "level": 1 },
      { "name": "交渉", "level": 2 },
      { "name": "情報:ウェブ", "level": 1 }
    ]
  },
  {
    "id": "programmer",
    "name": "プログラマー",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "運転:", "level": 2 },
      { "name": "意志", "level": 2 },
      { "name": "知識:", "level": 2 },
      { "name": "情報:ウェブ", "level": 1 }
    ]
  },
  {
    "id": "hacker",
    "name": "ハッカー",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 0 },
    "skills": [
      { "name": "知識:", "level": 2 },
      { "name": "交渉", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "情報:ウェブ", "level": 2 },
      { "name": "情報:裏社会", "level": 1 }
    ]
  },
  {
    "id": "handyman",
    "name": "何でも屋",
    "category": "一般社会",
    "ability": { "body": 1, "sense": 0, "mind": 0, "social": 0 },
    "skills": [
      { "name": "白兵", "level": 1 },
      { "name": "回避", "level": 1 },
      { "name": "知覚", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "情報:噂話", "level": 1 }
    ]
  },
  {
    "id": "informant",
    "name": "情報屋",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 0, "mind": 0, "social": 1 },
    "skills": [
      { "name": "回避", "level": 1 },
      { "name": "知覚", "level": 1 },
      { "name": "情報:", "level": 5 },
      { "name": "調達", "level": 1 },
      { "name": "情報:軍事", "level": 1 }
    ]
  },
  {
    "id": "agent",
    "name": "工作員",
    "category": "一般社会",
    "ability": { "body": 0, "sense": 1, "mind": 0, "social": 0 },
    "skills": [
      { "name": "回避", "level": 1 },
      { "name": "知覚", "level": 1 },
      { "name": "交渉", "level": 1 },
      { "name": "調達", "level": 1 },
      { "name": "情報:軍事", "level": 1 }
    ]
  }
];
let syndromes = [
  {
    "id": "angel_halo",
    "name": "エンジェルハィロゥ",
    "ability": { "body": 0, "sense": 3, "mind": 1, "social": 0 }
  },
  {
    "id": "balor",
    "name": "バロール",
    "ability": { "body": 0, "sense": 1, "mind": 2, "social": 1 }
  },
  {
    "id": "black_dog",
    "name": "ブラックドッグ",
    "ability": { "body": 2, "sense": 1, "mind": 1, "social": 0 }
  },
  {
    "id": "blam_stoker",
    "name": "ブラム＝ストーカー",
    "ability": { "body": 1, "sense": 2, "mind": 1, "social": 0 }
  },
  {
    "id": "chimaera",
    "name": "キュマイラ",
    "ability": { "body": 3, "sense": 0, "mind": 0, "social": 1 }
  },
  {
    "id": "exile",
    "name": "エグザイル",
    "ability": { "body": 2, "sense": 1, "mind": 0, "social": 1 }
  },
  {
    "id": "hanuman",
    "name": "ハヌマーン",
    "ability": { "body": 1, "sense": 1, "mind": 1, "social": 1 }
  },
  {
    "id": "morpheus",
    "name": "モルフェウス",
    "ability": { "body": 1, "sense": 2, "mind": 0, "social": 1 }
  },
  {
    "id": "neumann",
    "name": "ノイマン",
    "ability": { "body": 0, "sense": 0, "mind": 3, "social": 1 }
  },
  {
    "id": "orcus",
    "name": "オルクス",
    "ability": { "body": 0, "sense": 1, "mind": 1, "social": 2 }
  },
  {
    "id": "salamandra",
    "name": "サラマンダー",
    "ability": { "body": 2, "sense": 0, "mind": 1, "social": 1 }
  },
  {
    "id": "solaris",
    "name": "ソラリス",
    "ability": { "body": 0, "sense": 0, "mind": 1, "social": 3 }
  },
  {
    "id": "ouroboros",
    "name": "ウロボロス",
    "ability": { "body": 1, "sense": 1, "mind": 2, "social": 0 }
  },
  {
    "id": "azathoth",
    "name": "アザトース",
    "ability": { "body": 1, "sense": 0, "mind": 3, "social": 0 }
  },
  {
    "id": "mistilteinn",
    "name": "ミストルティン",
    "ability": { "body": 2, "sense": 2, "mind": 0, "social": 0 }
  },
  {
    "id": "gleipnir",
    "name": "グレイプニル",
    "ability": { "body": 1, "sense": 0, "mind": 2, "social": 1 }
  }
];
let lifepaths = {
  "birth": {
    "normal": [
      { "id": "heavenly_orphan", "name": "天涯孤独", "dice": "01-05" },
      { "id": "absent_parents", "name": "父親(母親)不在", "dice": "06-10" },
      { "id": "adopted", "name": "義理の両親", "dice": "11-15" },
      { "id": "religious_family", "name": "結社の一員", "dice": "16-20" },
      { "id": "political_family", "name": "政治権力", "dice": "21-25" },
      { "id": "bloodline", "name": "権力者の血統", "dice": "26-30" },
      { "id": "wealthy", "name": "資産家", "dice": "31-35" },
      { "id": "celebrity", "name": "有名人", "dice": "36-40" },
      { "id": "siblings", "name": "兄弟", "dice": "41-45" },
      { "id": "sisters", "name": "姉妹", "dice": "46-50" },
      { "id": "local", "name": "名家の生まれ", "dice": "51-55" },
      { "id": "understanding_parent", "name": "親の理解", "dice": "56-60" },
      { "id": "poor", "name": "貧乏", "dice": "61-65" },
      { "id": "abandoned", "name": "疎まれた子", "dice": "66-70" },
      { "id": "expected_child", "name": "待望された子", "dice": "71-75" },
      { "id": "stable_home", "name": "安定した家庭", "dice": "76-80" },
      { "id": "raised_by_relative", "name": "親戚と疎遠", "dice": "81-85" },
      { "id": "large_family", "name": "複数の兄弟姉妹", "dice": "86-90" },
      { "id": "twins", "name": "双子", "dice": "91-95" },
      { "id": "criminal_child", "name": "犯罪者の子", "dice": "96-100" }
    ],

    "rb": [
      { "id": "fake_family", "name": "偽りの家庭", "dice": "01-05" },
      { "id": "interest_human", "name": "人類への興味", "dice": "06-10" },
      { "id": "renegade_family", "name": "レネゲイドファミリー", "dice": "11-15" },
      { "id": "half", "name": "半身", "dice": "16-20" },
      { "id": "sudden_awakening", "name": "突然の覚醒", "dice": "21-25" },
      { "id": "artificial_life", "name": "人工生命", "dice": "26-30" },
      { "id": "old_memory", "name": "旧き記憶", "dice": "31-35" },
      { "id": "subject", "name": "被験体", "dice": "36-40" },
      { "id": "lack_emotion", "name": "感情の欠落", "dice": "41-45" },
      { "id": "watcher", "name": "ウォッチャー", "dice": "46-50" },
      { "id": "transferred_body", "name": "転生体", "dice": "51-55" },
      { "id": "lonely_soul", "name": "孤独な魂", "dice": "56-60" },
      { "id": "mission", "name": "使命", "dice": "61-65" },
      { "id": "last_hope", "name": "最後の希望", "dice": "66-70" },
      { "id": "forced_release", "name": "強制解放", "dice": "71-75" },
      { "id": "hibernation", "name": "冬眠", "dice": "76-80" },
      { "id": "mother_earth", "name": "母なる大地", "dice": "81-85" },
      { "id": "earth_guardian", "name": "地球外生命", "dice": "86-90" },
      { "id": "eye_of_god", "name": "天の眼差し", "dice": "91-95" },
      { "id": "birth_of_mystery", "name": "謎の出生", "dice": "96-100" }
    ]
  },
  "awakening": [
    { "id": "death", "name": "死", "dice": "0", "erosion": 18 },
    { "id": "rage", "name": "憤怒", "dice": "1", "erosion": 17 },
    { "id": "element", "name": "素体", "dice": "2", "erosion": 16 },
    { "id": "infection", "name": "感染", "dice": "3", "erosion": 14 },
    { "id": "thirst", "name": "渇望", "dice": "4", "erosion": 17 },
    { "id": "unknown", "name": "無知", "dice": "5", "erosion": 15 },
    { "id": "sacrifice", "name": "犠牲", "dice": "6", "erosion": 16 },
    { "id": "command", "name": "命令", "dice": "7", "erosion": 15 },
    { "id": "forgetfulness", "name": "忘却", "dice": "8", "erosion": 17 },
    { "id": "quest", "name": "探求", "dice": "9", "erosion": 14 },
    { "id": "repayment", "name": "償い", "dice": "10", "erosion": 18 },
    { "id": "birth", "name": "生誕", "dice": "11", "erosion": 17 }
  ],

  "impulse": [
    { "id": "release", "name": "解放", "dice": "0", "erosion": 18 },
    { "id": "hunger", "name": "飢餓", "dice": "1", "erosion": 17 },
    { "id": "starvation", "name": "吸血", "dice": "2", "erosion": 14 },
    { "id": "slaughter", "name": "殺戮", "dice": "3", "erosion": 18 },
    { "id": "destruction", "name": "破壊", "dice": "4", "erosion": 16 },
    { "id": "abuse", "name": "加虐", "dice": "5", "erosion": 15 },
    { "id": "disgust", "name": "嫌悪", "dice": "6", "erosion": 15 },
    { "id": "battle", "name": "闘争", "dice": "7", "erosion": 16 },
    { "id": "delusion", "name": "妄想", "dice": "8", "erosion": 14 },
    { "id": "selfharm", "name": "自傷", "dice": "9", "erosion": 16 },
    { "id": "fear", "name": "恐怖", "dice": "10", "erosion": 17 },
    { "id": "hatred", "name": "憎悪", "dice": "11", "erosion": 18 }
  ],

  "desire": [
    { "id": "peace", "name": "平穏", "dice": "0" },
    { "id": "revenge", "name": "復讐", "dice": "01-05" },
    { "id": "victory", "name": "勝利", "dice": "06-10" },
    { "id": "recover_loss", "name": "喪失", "dice": "11-15" },
    { "id": "domination", "name": "支配", "dice": "16-20" },
    { "id": "obedience", "name": "従属", "dice": "21-25" },
    { "id": "fight", "name": "闘争", "dice": "26-30" },
    { "id": "escape", "name": "逃避", "dice": "31-35" },
    { "id": "preservation", "name": "保持", "dice": "36-40" },
    { "id": "eradication", "name": "消滅", "dice": "41-45" },
    { "id": "create_world", "name": "世界を築く", "dice": "46-50" },
    { "id": "survival", "name": "生存", "dice": "51-55" },
    { "id": "greed", "name": "物欲", "dice": "56-60" },
    { "id": "glory", "name": "栄光", "dice": "61-65" },
    { "id": "belonging", "name": "居場所", "dice": "66-70" },
    { "id": "evolution", "name": "進化", "dice": "71-75" },
    { "id": "ideal", "name": "理想の実現", "dice": "76-80" },
    { "id": "knowledge", "name": "知識の探求", "dice": "81-85" },
    { "id": "love", "name": "愛情", "dice": "86-90" },
    { "id": "transcend", "name": "超越", "dice": "91-95" },
    { "id": "massacre", "name": "殺戮", "dice": "96-100" },
    { "id": "freedom", "name": "自由", "dice": "101" }
  ],
  "experience": {

    "student": [
      { "id": "ordinary", "name": "平凡", "dice": "01-05" },
      { "id": "eternal_farewell", "name": "永劫の別れ", "dice": "06-10" },
      { "id": "long_hospitalization", "name": "長期入院", "dice": "11-15" },
      { "id": "major_accident", "name": "大事故", "dice": "16-20" },
      { "id": "death_rebirth", "name": "死と再生", "dice": "21-25" },
      { "id": "loss", "name": "喪失", "dice": "26-30" },
      { "id": "injury", "name": "殺傷", "dice": "31-35" },
      { "id": "news", "name": "ニュース", "dice": "36-40" },
      { "id": "overseas", "name": "海外生活", "dice": "41-45" },
      { "id": "great_success", "name": "大成功", "dice": "46-50" },
      { "id": "trauma", "name": "トラウマ", "dice": "51-55" },
      { "id": "escape", "name": "逃走", "dice": "56-60" },
      { "id": "first_love", "name": "初恋", "dice": "61-65" },
      { "id": "transfer", "name": "転校", "dice": "66-70" },
      { "id": "turning_point", "name": "大きな転機", "dice": "71-75" },
      { "id": "small_honor", "name": "小さな名誉", "dice": "76-80" },
      { "id": "great_failure", "name": "大失敗", "dice": "81-85" },
      { "id": "best_friend", "name": "親友", "dice": "86-90" },
      { "id": "promise", "name": "約束", "dice": "91-95" },
      { "id": "amnesia", "name": "記憶喪失", "dice": "96-100" }
    ],

    "general": [
      { "id": "ordinary", "name": "平凡", "dice": "01-05" },
      { "id": "eternal_farewell", "name": "永劫の別れ", "dice": "06-10" },
      { "id": "long_hospitalization", "name": "長期入院", "dice": "11-15" },
      { "id": "marriage", "name": "結婚", "dice": "16-20" },
      { "id": "death_rebirth", "name": "死と再生", "dice": "21-25" },
      { "id": "loss", "name": "喪失", "dice": "26-30" },
      { "id": "victim", "name": "被害者", "dice": "31-35" },
      { "id": "news", "name": "ニュース", "dice": "36-40" },
      { "id": "overseas", "name": "海外生活", "dice": "41-45" },
      { "id": "great_success", "name": "大成功", "dice": "46-50" },
      { "id": "treasured_child", "name": "子宝", "dice": "51-55" },
      { "id": "success_in_life", "name": "出世", "dice": "56-60" },
      { "id": "heartbreak", "name": "失恋", "dice": "61-65" },
      { "id": "busy", "name": "多忙", "dice": "66-70" },
      { "id": "try_from_tomorrow", "name": "明日から頑張る", "dice": "71-75" },
      { "id": "downfall", "name": "大転落", "dice": "76-80" },
      { "id": "humiliation", "name": "屈辱", "dice": "81-85" },
      { "id": "sworn_friend", "name": "盟友", "dice": "86-90" },
      { "id": "forbidden_love", "name": "禁断の愛", "dice": "91-95" },
      { "id": "amnesia", "name": "記憶喪失", "dice": "96-100" }
    ],

    "underworld": [
      { "id": "idleness", "name": "無為", "dice": "01-05" },
      { "id": "eternal_farewell", "name": "永劫の別れ", "dice": "06-10" },
      { "id": "long_hospitalization", "name": "長期入院", "dice": "11-15" },
      { "id": "major_accident", "name": "大事故", "dice": "16-20" },
      { "id": "death_rebirth", "name": "死と再生", "dice": "21-25" },
      { "id": "loss", "name": "喪失", "dice": "26-30" },
      { "id": "crime", "name": "犯罪", "dice": "31-35" },
      { "id": "tabloid", "name": "三面記事", "dice": "36-40" },
      { "id": "betrayal", "name": "裏切り", "dice": "41-45" },
      { "id": "upstart", "name": "成り上がり", "dice": "46-50" },
      { "id": "legend", "name": "伝説", "dice": "51-55" },
      { "id": "infinite_corridor", "name": "無限回廊", "dice": "56-60" },
      { "id": "grand_love", "name": "大恋愛", "dice": "61-65" },
      { "id": "dangerous_work", "name": "危険な仕事", "dice": "66-70" },
      { "id": "days_of_fighting", "name": "闘いの日々", "dice": "71-75" },
      { "id": "lasting_wound", "name": "消せない傷", "dice": "76-80" },
      { "id": "defeat", "name": "敗北", "dice": "81-85" },
      { "id": "estrangement", "name": "絶縁", "dice": "86-90" },
      { "id": "lone_wolf", "name": "一匹狼", "dice": "91-95" },
      { "id": "amnesia", "name": "記憶喪失", "dice": "96-100" }
    ],

    "ugn": [
      { "id": "loyalty_to_ugn", "name": "UGNへの忠誠", "dice": "01-05" },
      { "id": "rampage_of_power", "name": "力の暴走", "dice": "06-10" },
      { "id": "test_subject", "name": "実験体", "dice": "11-15" },
      { "id": "wall_of_heart", "name": "心の壁", "dice": "16-20" },
      { "id": "death_of_a_comrade", "name": "仲間の死", "dice": "21-25" },
      { "id": "secret", "name": "秘密", "dice": "26-30" },
      { "id": "betrayed_someone", "name": "裏切った", "dice": "31-35" },
      { "id": "was_betrayed", "name": "裏切られた", "dice": "36-40" },
      { "id": "longing_for_ordinary", "name": "平凡への憧れ", "dice": "41-45" },
      { "id": "rebelling_against_ordinary", "name": "平凡への反発", "dice": "46-50" },
      { "id": "amnesia", "name": "記憶喪失", "dice": "51-55" },
      { "id": "desertion", "name": "脱走", "dice": "56-60" },
      { "id": "veteran", "name": "古強者", "dice": "61-65" },
      { "id": "technical_field", "name": "技術畑", "dice": "66-70" },
      { "id": "hostile_organization", "name": "敵性組織", "dice": "71-75" },
      { "id": "pure_breed_upbringing", "name": "純粋培養", "dice": "76-80" },
      { "id": "great_victory", "name": "大勝利", "dice": "81-85" },
      { "id": "dirty_work", "name": "汚れ仕事", "dice": "86-90" },
      { "id": "great_blunder", "name": "大失態", "dice": "91-95" },
      { "id": "fear_of_ugn", "name": "UGNへの畏怖", "dice": "96-100" }
    ],

    "fh": [
      { "id": "loyalty_to_fh", "name": "FHへの忠誠", "dice": "01-05" },
      { "id": "rampage_of_power", "name": "力の暴走", "dice": "06-10" },
      { "id": "test_subject", "name": "実験体", "dice": "11-15" },
      { "id": "tragic_love", "name": "悲恋", "dice": "16-20" },
      { "id": "death_of_a_comrade", "name": "仲間の死", "dice": "21-25" },
      { "id": "secret", "name": "秘密", "dice": "26-30" },
      { "id": "despair", "name": "絶望", "dice": "31-35" },
      { "id": "loss", "name": "喪失", "dice": "36-40" },
      { "id": "longing_for_ordinary", "name": "平凡への憧れ", "dice": "41-45" },
      { "id": "rebelling_against_ordinary", "name": "平凡への反発", "dice": "46-50" },
      { "id": "amnesia", "name": "記憶喪失", "dice": "51-55" },
      { "id": "desertion", "name": "脱走", "dice": "56-60" },
      { "id": "legend", "name": "伝説", "dice": "61-65" },
      { "id": "dream", "name": "夢", "dice": "66-70" },
      { "id": "hostile_organization", "name": "敵性組織", "dice": "71-75" },
      { "id": "conspiracy", "name": "奸計", "dice": "76-80" },
      { "id": "great_success", "name": "大成功", "dice": "81-85" },
      { "id": "suspicion", "name": "疑惑", "dice": "86-90" },
      { "id": "stain", "name": "汚点", "dice": "91-95" },
      { "id": "fear_of_fh", "name": "FHへの畏怖", "dice": "96-100" }
    ],

    "rb": [
      { "id": "happy_moment", "name": "幸せなひととき", "dice": "01-05" },
      { "id": "journey", "name": "旅", "dice": "06-10" },
      { "id": "exposure", "name": "露見", "dice": "11-15" },
      { "id": "harsh_environment", "name": "過酷な環境", "dice": "16-20" },
      { "id": "research_facility", "name": "研究機関", "dice": "21-25" },
      { "id": "loss", "name": "喪失", "dice": "26-30" },
      { "id": "investigation_of_humanity", "name": "人類の調査", "dice": "31-35" },
      { "id": "contact_with_a_comrade", "name": "仲間との接触", "dice": "36-40" },
      { "id": "death_rebirth", "name": "死と再生", "dice": "41-45" },
      { "id": "separation", "name": "別離", "dice": "46-50" },
      { "id": "invitation", "name": "勧誘", "dice": "51-55" },
      { "id": "capture_target", "name": "捕獲対象", "dice": "56-60" },
      { "id": "spotlight", "name": "脚光", "dice": "61-65" },
      { "id": "close_friend", "name": "親友", "dice": "66-70" },
      { "id": "anguish", "name": "煩悶", "dice": "71-75" },
      { "id": "secret", "name": "秘密", "dice": "76-80" },
      { "id": "dormancy", "name": "生命停止", "dice": "81-85" },
      { "id": "organizational_affiliation", "name": "組織への所属", "dice": "86-90" },
      { "id": "days_of_slaughter", "name": "殺戮の日々", "dice": "91-95" },
      { "id": "amnesia", "name": "記憶喪失", "dice": "96-100" }
    ]
  },

  "encounter": {

    "normal": [
      { "id": "self", "name": "自身", "dice": "01-05" },
      { "id": "master", "name": "師匠", "dice": "06-10" },
      { "id": "guardian", "name": "保護者", "dice": "11-15" },
      { "id": "benefactor", "name": "恩人", "dice": "16-20" },
      { "id": "master_lord", "name": "主人", "dice": "21-25" },
      { "id": "debt_owed", "name": "借り", "dice": "26-30" },
      { "id": "good_person", "name": "いいひと", "dice": "31-35" },
      { "id": "family", "name": "家族", "dice": "36-40" },
      { "id": "friend", "name": "友人", "dice": "41-45" },
      { "id": "comrade", "name": "同志", "dice": "46-50" },
      { "id": "business", "name": "ビジネス", "dice": "51-55" },
      { "id": "companion", "name": "同行者", "dice": "56-60" },
      { "id": "forgotten", "name": "忘却", "dice": "61-65" },
      { "id": "affection", "name": "慕情", "dice": "66-70" },
      { "id": "debt_owed_to_them", "name": "貸し", "dice": "71-75" },
      { "id": "young_child", "name": "幼子", "dice": "76-80" },
      { "id": "old_relationship", "name": "腐れ縁", "dice": "81-85" },
      { "id": "secret", "name": "秘密", "dice": "86-90" },
      { "id": "rival", "name": "好敵手", "dice": "91-95" },
      { "id": "murderous_intent", "name": "殺意", "dice": "96-100" },
      { "id": "any", "name": "任意", "dice": "101" }
    ],

    "rb": [
      { "id": "self", "name": "自身", "dice": "01-05" },
      { "id": "master", "name": "師匠", "dice": "06-10" },
      { "id": "guardian", "name": "保護者", "dice": "11-15" },
      { "id": "benefactor", "name": "恩人", "dice": "16-20" },
      { "id": "master_lord", "name": "主人", "dice": "21-25" },
      { "id": "debt_owed", "name": "借り", "dice": "26-30" },
      { "id": "good_person", "name": "いいひと", "dice": "31-35" },
      { "id": "family", "name": "家族", "dice": "36-40" },
      { "id": "friend", "name": "友人", "dice": "41-45" },
      { "id": "comrade", "name": "同志", "dice": "46-50" },
      { "id": "business", "name": "ビジネス", "dice": "51-55" },
      { "id": "companion", "name": "同行者", "dice": "56-60" },
      { "id": "forgotten", "name": "忘却", "dice": "61-65" },
      { "id": "affection", "name": "慕情", "dice": "66-70" },
      { "id": "debt_owed_to_them", "name": "貸し", "dice": "71-75" },
      { "id": "young_child", "name": "幼子", "dice": "76-80" },
      { "id": "old_relationship", "name": "腐れ縁", "dice": "81-85" },
      { "id": "secret", "name": "秘密", "dice": "86-90" },
      { "id": "rival", "name": "好敵手", "dice": "91-95" },
      { "id": "murderous_intent", "name": "殺意", "dice": "96-100" },
      { "id": "any", "name": "任意", "dice": "101" }
    ]

  }

}
;

// =========================
// 要素取得
// =========================

const workSelect = document.getElementById("workSelect");

const bodyValue = document.getElementById("bodyValue");
const senseValue = document.getElementById("senseValue");
const mindValue = document.getElementById("mindValue");
const socialValue = document.getElementById("socialValue");


const hpValue = document.getElementById("hpValue");
const actionValue = document.getElementById("actionValue");
const moveValue = document.getElementById("moveValue");
const erosionValue = document.getElementById("erosionValue");
const expValue = document.getElementById("expValue");
const userSkillList = document.getElementById("userSkillList");
const addSkillBtn = document.getElementById("addSkillBtn");

// =========================
// 能力値 成長・修正／技能（追加分） 状態管理
// =========================

let abilityBase = { body: 0, sense: 0, mind: 0, social: 0 };

let abilityMods = {
    body: { growth: 0, correction: 0 },
    sense: { growth: 0, correction: 0 },
    mind: { growth: 0, correction: 0 },
    social: { growth: 0, correction: 0 }
};

let erosionCorrection = 0;
let hpCorrection = 0;
let actionCorrection = 0;
let wealthCorrection = 0;

const skillNameOptions = [
    "白兵", "射撃", "RC", "交渉", "回避", "知覚", "意志", "調達",
    "運転:", "芸術:", "知識:", "情報:"
];

const freeTextSkillNames = ["運転:", "芸術:", "知識:", "情報:"];

let userSkills = [];

function createDefaultSkillRow(){
    return { skillName: skillNameOptions[0], customText: "", baseLv: 0, growth: 0, correction: 0 };
}

function parseWorkSkillName(rawName){
    const idx = rawName.indexOf(":");
    if (idx >= 0) {
        return { skillName: rawName.slice(0, idx + 1), customText: rawName.slice(idx + 1) };
    }
    return { skillName: rawName, customText: "" };
}

function syncWorkSkillsToUserSkills(work){

    const newSkills = [];

    if (work && Array.isArray(work.skills)) {
        work.skills.forEach(s => {
            const parsed = parseWorkSkillName(s.name);
            const skillName = skillNameOptions.includes(parsed.skillName) ? parsed.skillName : skillNameOptions[0];
            newSkills.push({
                skillName,
                customText: parsed.customText,
                baseLv: s.level,
                growth: 0,
                correction: 0
            });
        });
    }

    while (newSkills.length < 5) {
        newSkills.push(createDefaultSkillRow());
    }

    userSkills = newSkills;
    renderSkills();

}

for (let i = 0; i < 5; i++) {
    userSkills.push(createDefaultSkillRow());
}

// ---- 能力値 最終値表示 ----

function updateAbilityDisplay(){

    ["body", "sense", "mind", "social"].forEach(key => {

        const final =
            abilityBase[key] +
            abilityMods[key].growth +
            abilityMods[key].correction;

        document.getElementById(key + "Value").textContent = final;
        document.getElementById(key + "Growth").textContent = abilityMods[key].growth;
        document.getElementById(key + "Correction").textContent = abilityMods[key].correction;

    });

    recalcStats();

}

document.getElementById("abilityTable").addEventListener("click", e => {

    if (!e.target.classList.contains("abilityBtn")) return;

    const ability = e.target.dataset.ability;
    const field = e.target.dataset.field;
    const op = e.target.dataset.op;
    const delta = op === "+" ? 1 : -1;

    if (field === "growth" && abilityMods[ability].growth + delta < 0) return;

    abilityMods[ability][field] += delta;

    updateAbilityDisplay();

});

// ---- 技能（追加分）描画 ----

function renderSkills(){

    userSkillList.innerHTML = "";

    userSkills.forEach((sk, idx) => {

        const correction = sk.correction || 0;
        const lv = sk.baseLv + sk.growth + correction;
        const needsCustom = freeTextSkillNames.includes(sk.skillName);

        const row = document.createElement("div");
        row.className = "skillRow";

        row.innerHTML = `
            <div class="skillMain">
                <select class="skillNameSelect" data-idx="${idx}">
                    ${skillNameOptions.map(n => `<option value="${n}"${n === sk.skillName ? " selected" : ""}>${n}</option>`).join("")}
                </select>
                <span class="skillLv">Lv${lv}</span>
                <button class="removeSkillBtn" type="button" data-idx="${idx}">×</button>
            </div>
            ${needsCustom ? `<input class="skillCustomInput" data-idx="${idx}" type="text" placeholder="詳細" value="${sk.customText.replace(/"/g, "&quot;")}">` : ""}
            <div class="skillCounters">
                <span class="counterCell"><span class="counterLabel">成長</span><button class="miniBtn skillBtn" data-idx="${idx}" data-field="growth" data-op="-">-</button><span class="counterNum">${sk.growth}</span><button class="miniBtn skillBtn" data-idx="${idx}" data-field="growth" data-op="+">+</button></span>
                <span class="counterCell"><span class="counterLabel">修正</span><button class="miniBtn skillBtn" data-idx="${idx}" data-field="correction" data-op="-">-</button><span class="counterNum">${correction}</span><button class="miniBtn skillBtn" data-idx="${idx}" data-field="correction" data-op="+">+</button></span>
            </div>
        `;

        userSkillList.appendChild(row);

    });

    recalcStats();

}

userSkillList.addEventListener("change", e => {

    const idx = +e.target.dataset.idx;
    if (Number.isNaN(idx)) return;

    if (e.target.classList.contains("skillNameSelect")) {
        userSkills[idx].skillName = e.target.value;
        renderSkills();
    } else if (e.target.classList.contains("skillCustomInput")) {
        userSkills[idx].customText = e.target.value;
    }

});

userSkillList.addEventListener("click", e => {

    const idx = +e.target.dataset.idx;
    if (Number.isNaN(idx)) return;

    if (e.target.classList.contains("skillBtn")) {

        const field = e.target.dataset.field;
        const op = e.target.dataset.op;
        const delta = op === "+" ? 1 : -1;

        if (field === "growth" && userSkills[idx].growth + delta < 0) return;

        userSkills[idx][field] += delta;

        renderSkills();

    } else if (e.target.classList.contains("removeSkillBtn")) {

        userSkills.splice(idx, 1);
        renderSkills();

    }

});

addSkillBtn.addEventListener("click", () => {
    userSkills.push(createDefaultSkillRow());
    renderSkills();
});

// ---- 経験点計算（能力値・技能の成長のみ／修正は含めない） ----
// 参考: https://w.atwiki.jp/ragadoon/pages/615.html

function skillLevelCost(lv, isFreeText){
    if (lv <= 6) return isFreeText ? 1 : 2;
    if (lv <= 11) return 3;
    if (lv <= 21) return 5;
    return 10;
}

function skillGrowthCost(growth, isFreeText){
    let total = 0;
    for (let lv = 1; lv <= growth; lv++) {
        total += skillLevelCost(lv, isFreeText);
    }
    return total;
}

const ABILITY_GROWTH_COST_PER_POINT = 10;

// ---- ステータス（HP・行動値・侵蝕値・消費経験点）再計算 ----

function getChotatsuLevel(){
    if (!Array.isArray(userSkills)) return 0;
    let total = 0;
    userSkills.forEach(sk => {
        if (sk.skillName === "調達") {
            total += Number(sk.baseLv || 0) + Number(sk.growth || 0) + Number(sk.correction || 0);
        }
    });
    return total;
}

function getTotalEquipCount(){
    let total = 0;
    document.querySelectorAll(".item-equip").forEach(el => {
        const v = Number(el.value);
        if (!isNaN(v)) total += v;
    });
    return total;
}

function recalcStats(){

    const body = abilityBase.body + abilityMods.body.growth + abilityMods.body.correction;
    const sense = abilityBase.sense + abilityMods.sense.growth + abilityMods.sense.correction;
    const mind = abilityBase.mind + abilityMods.mind.growth + abilityMods.mind.correction;
    const social = abilityBase.social + abilityMods.social.growth + abilityMods.social.correction;

    const hp = body * 2 + mind + 20 + hpCorrection;
    const action = sense * 2 + mind + actionCorrection;

    if (hpValue) hpValue.textContent = hp;
    if (actionValue) actionValue.textContent = action;
    if (moveValue) moveValue.textContent = action + 5;

    const hpCorrectionEl = document.getElementById("hpCorrection");
    if (hpCorrectionEl) {
        hpCorrectionEl.textContent =
            hpCorrection > 0 ? `＋${hpCorrection}` :
            hpCorrection < 0 ? `－${Math.abs(hpCorrection)}` :
            "±0";
    }

    const actionCorrectionEl = document.getElementById("actionCorrection");
    if (actionCorrectionEl) {
        actionCorrectionEl.textContent =
            actionCorrection > 0 ? `＋${actionCorrection}` :
            actionCorrection < 0 ? `－${Math.abs(actionCorrection)}` :
            "±0";
    }

    const chotatsuLevel = getChotatsuLevel();
    const totalEquip = getTotalEquipCount();
    const wealth = social * 2 + chotatsuLevel * 2 + wealthCorrection - totalEquip;

    const wealthValueEl = document.getElementById("wealthValue");
    if (wealthValueEl) wealthValueEl.textContent = wealth;

    const wealthCorrectionEl = document.getElementById("wealthCorrection");
    if (wealthCorrectionEl) {
        wealthCorrectionEl.textContent =
            wealthCorrection > 0 ? `＋${wealthCorrection}` :
            wealthCorrection < 0 ? `－${Math.abs(wealthCorrection)}` :
            "±0";
    }

    let erosion = 0;
    const awakeningSel = document.getElementById("awakening");
    const impulseSel = document.getElementById("impulse");

    if (awakeningSel) {
        const aw = (lifepaths.awakening || []).find(a => a.id === awakeningSel.value);
        if (aw) erosion += aw.erosion;
    }

    if (impulseSel) {
        const im = (lifepaths.impulse || []).find(a => a.id === impulseSel.value);
        if (im) erosion += im.erosion;
    }

    erosion += erosionCorrection;

    if (erosionValue) erosionValue.textContent = erosion;

    const erosionCorrectionEl = document.getElementById("erosionCorrection");
    if (erosionCorrectionEl) {
        erosionCorrectionEl.textContent =
            erosionCorrection > 0 ? `＋${erosionCorrection}` :
            erosionCorrection < 0 ? `－${Math.abs(erosionCorrection)}` :
            "±0";
    }

    let exp = (workSelect && workSelect.value) ? 0 : -9;

    ["body", "sense", "mind", "social"].forEach(key => {
        exp += abilityMods[key].growth * ABILITY_GROWTH_COST_PER_POINT;
    });

    userSkills.forEach(sk => {
        const isFreeText = freeTextSkillNames.includes(sk.skillName);
        const totalCost = skillGrowthCost(sk.baseLv + sk.growth, isFreeText);
        const baseCost = skillGrowthCost(sk.baseLv, isFreeText);
        exp += (totalCost - baseCost);
    });

    if (expValue) expValue.textContent = exp;

    window.__baseExpTotal = exp;
    if (typeof refreshTotalExpBadge === "function") refreshTotalExpBadge();

}

// ---- 消費経験点合計（能力値・技能＋取得エフェクト）フローティング表示 ----

function refreshTotalExpBadge(){
    const badge = document.getElementById("expFloatBadge");
    const valueEl = document.getElementById("expFloatBadgeValue");
    if (!badge || !valueEl) return;

    const base = Number(window.__baseExpTotal || 0);
    const fx = Number(window.__effectsExpTotal || 0);
    const items = Number(window.__itemsExpTotal || 0);
    const total = base + fx + items;

    valueEl.textContent = total;
    badge.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", () => {

    renderSkills();

    const awakeningSel = document.getElementById("awakening");
    const impulseSel = document.getElementById("impulse");

    if (awakeningSel) awakeningSel.addEventListener("change", recalcStats);
    if (impulseSel) impulseSel.addEventListener("change", recalcStats);

    const statusCardEl = document.querySelector(".statusCard");
    if (statusCardEl) {
        statusCardEl.addEventListener("click", e => {
            if (!e.target.classList.contains("erosionAdjustBtn")) return;
            const row = e.target.closest(".erosionAdjustRow");
            if (!row) return;
            const stat = row.dataset.stat;
            const delta = e.target.dataset.op === "+" ? 1 : -1;
            if (stat === "hp") hpCorrection += delta;
            else if (stat === "action") actionCorrection += delta;
            else if (stat === "erosion") erosionCorrection += delta;
            else if (stat === "wealth") wealthCorrection += delta;
            recalcStats();
        });
    }

});


// =========================
// 初期化
// =========================

window.addEventListener("DOMContentLoaded", init);

async function init(){

    await loadWorks();
    await loadSyndromes();
    await loadLifepaths();

    recalcStats();

}

// =========================
// ワークス読込
// =========================

async function loadWorks(){createWorkList();}


// =========================
// ワークス一覧作成
// =========================

function createWorkList(){

    workSelect.innerHTML =
    `<option value="">選択してください</option>`;

    works.forEach(work=>{

        const option=document.createElement("option");

        option.value=work.id;

        const ab=work.ability;const bonus=(ab.body?` 肉+${ab.body}`:"")+(ab.sense?` 感+${ab.sense}`:"")+(ab.mind?` 精+${ab.mind}`:"")+(ab.social?` 社+${ab.social}`:"");option.textContent=work.name+bonus;

        workSelect.appendChild(option);

    });

}


// =========================
// ワークス変更
// =========================

workSelect.addEventListener("change",()=>{

    const work=works.find(w=>w.id===workSelect.value);

    if(!work){

        clearStatus();

        syncWorkSkillsToUserSkills(null);

        return;

    }

 updateAbility();

updateOrganization();

syncWorkSkillsToUserSkills(work);

});


// =========================
// 能力値
// =========================

function drawAbility(work){

    abilityBase.body = work.ability.body;
    abilityBase.sense = work.ability.sense;
    abilityBase.mind = work.ability.mind;
    abilityBase.social = work.ability.social;

    updateAbilityDisplay();

}



// =========================
// リセット
// =========================

function clearStatus(){

    abilityBase.body = 0;
    abilityBase.sense = 0;
    abilityBase.mind = 0;
    abilityBase.social = 0;

    updateAbilityDisplay();

}

// =========================
// シンドローム読込
// =========================

async function loadSyndromes(){
    createSyndromeList();
}

// =========================
// ライフパス読込
// =========================

async function loadLifepaths(){
    createLifepathList();
}

// =========================
// ライフパス生成
// =========================

function createLifepathList(){

    fillSelect("birth", lifepaths.birth.normal);

    fillSelect("experience", lifepaths.experience.student);
document
    .getElementById("experienceType")
    .addEventListener("change", changeExperienceType);

    fillSelect("encounter", lifepaths.encounter.normal);

    fillSelect("awakening", lifepaths.awakening);

    fillSelect("impulse", lifepaths.impulse);

}

// =========================
// Selectへ追加
// =========================

function fillSelect(id,data){

    const select=document.getElementById(id);

    select.innerHTML="";

    data.forEach(item=>{

        const option=document.createElement("option");

        option.value=item.id;

        option.textContent = (item.erosion!==undefined)
            ? `${item.name}（${item.erosion}）`
            : item.name;

        select.appendChild(option);

    });

}

//=========================
// 経験切替
//=========================

function changeExperienceType(){

    const type =
        document.getElementById("experienceType").value;

    // 経験
    fillSelect(
        "experience",
        lifepaths.experience[type]
    );

    // 出自
    if(type==="rb"){

        fillSelect(
            "birth",
            lifepaths.birth.rb
        );

    }else{

        fillSelect(
            "birth",
            lifepaths.birth.normal
        );

    }

// 邂逅・欲望
const encounterLabel =
    document.getElementById("encounterLabel");

if(type==="rb"){

    encounterLabel.textContent = "邂逅";

    fillSelect(
        "encounter",
        lifepaths.encounter.rb
    );

}else if(type==="fh"){

    encounterLabel.textContent = "欲望";

    fillSelect(
        "encounter",
        lifepaths.desire
    );

}else{

    encounterLabel.textContent = "邂逅";

    fillSelect(
        "encounter",
        lifepaths.encounter.normal
    );

}

   }


function updateOrganization(){

    const work = works.find(
        w => w.id === workSelect.value
    );

    if(!work) return;

    const type =
        document.getElementById("experienceType");

    switch(work.category){

        case "UGN":
            type.value = "ugn";
            break;

        case "FH":
            type.value = "fh";
            break;

        case "RB":
            type.value = "rb";
            break;

        case "裏社会":
            type.value = "underworld";
            break;

        default:
            type.value = "general";
            break;

    }

    changeExperienceType();

}

// =========================
// プルダウン作成
// =========================

function createSyndromeList(){

    const selects=[

        document.getElementById("syndrome1"),
        document.getElementById("syndrome2"),
        document.getElementById("syndrome3")

    ];

    selects.forEach(select=>{

        select.innerHTML="";

        const none=document.createElement("option");

        none.value="";

        none.textContent="なし";

        select.appendChild(none);

        syndromes.forEach(s=>{

            const option=document.createElement("option");

            option.value=s.id;

            option.textContent=s.name;

            select.appendChild(option);

        });

    });

}

// =========================
// 能力値計算
// =========================

function updateAbility() {

const work = works.find(
    w => w.id === workSelect.value
);

let body = 0;
let sense = 0;
let mind = 0;
let social = 0;

if (work) {

    body = work.ability.body;
    sense = work.ability.sense;
    mind = work.ability.mind;
    social = work.ability.social;

}


    // 選択されたシンドロームを取得
    const selected = [];

    ["syndrome1", "syndrome2", "syndrome3"].forEach(id => {

        const value = document.getElementById(id).value;

        if (!value) return;

        const syndrome = syndromes.find(
            s => s.id === value
        );

        if (syndrome) {

            selected.push(syndrome);

        }

    });


    // ピュアブリード
    if (selected.length === 1) {

        body += selected[0].ability.body * 2;
        sense += selected[0].ability.sense * 2;
        mind += selected[0].ability.mind * 2;
        social += selected[0].ability.social * 2;

    }

    // クロスブリード
    else if (selected.length === 2) {

        selected.forEach(s => {

            body += s.ability.body;
            sense += s.ability.sense;
            mind += s.ability.mind;
            social += s.ability.social;

        });

    }

    // トライブリード
    else if (selected.length >= 3) {

        for (let i = 0; i < 2; i++) {

            body += selected[i].ability.body;
            sense += selected[i].ability.sense;
            mind += selected[i].ability.mind;
            social += selected[i].ability.social;

        }

    }

    abilityBase.body = body;
    abilityBase.sense = sense;
    abilityBase.mind = mind;
    abilityBase.social = social;

    updateAbilityDisplay();

}

document
.querySelectorAll(
"#syndrome1,#syndrome2,#syndrome3"
)
.forEach(select=>{

    select.addEventListener(
        "change",
        updateAbility
    );

});


// ---- カラムの折りたたみ機能 ----
// 対象カード（.collapsible-card）の見出し以降をまとめて折りたためるようにする。
// ボタンはカードの一番下に置き、折りたたんだ時は見出し＋このボタンだけが残る。
function setupCollapsibleCards(){
  document.querySelectorAll('.collapsible-card').forEach(section => {
    if (section.querySelector('.card-toggle-btn')) return;
    let head = section.querySelector(':scope > .fxAcquiredHead');
    if (!head) head = section.querySelector(':scope > .cardHeadRow');
    if (!head) head = section.querySelector(':scope > h2');
    if (!head) return;

    const bodyWrap = document.createElement('div');
    bodyWrap.className = 'card-body-collapsible';
    let node = head.nextSibling;
    while (node) {
      const next = node.nextSibling;
      bodyWrap.appendChild(node);
      node = next;
    }
    section.appendChild(bodyWrap);

    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'card-toggle-btn';
    toggleBtn.addEventListener('click', () => {
      const collapsed = section.classList.toggle('collapsed');
      toggleBtn.textContent = collapsed ? '▸' : '▾';
      toggleBtn.title = collapsed ? '開く' : '折りたたむ';
    });
    section.appendChild(toggleBtn);

    const startCollapsed = section.dataset.collapsed === 'true';
    if (startCollapsed) section.classList.add('collapsed');
    toggleBtn.textContent = startCollapsed ? '▸' : '▾';
    toggleBtn.title = startCollapsed ? '開く' : '折りたたむ';
  });
}
document.addEventListener('DOMContentLoaded', setupCollapsibleCards);

// ---- 左カラム（エフェクト／Dロイス検索）の折りたたみ ----
// 折りたたんだ時だけ「ロイス／メモリー／設定メモ」を charColRight から
// charColLeft の末尾（技能・ライフパスの下）へ移動し、
// 展開した時は charColRight の元の位置（アイテムの下）へ戻す。
function moveRoisMemoBlocksForFxCollapse(collapsed){
  const charColLeft = document.querySelector('.charColLeft');
  const charColRight = document.querySelector('.charColRight');
  if(!charColLeft || !charColRight) return;
  const blocks = ['.roisCard', '.memoryCardSection', '.memoCard']
    .map(sel => document.querySelector(sel))
    .filter(Boolean);
  const target = collapsed ? charColLeft : charColRight;
  blocks.forEach(el => target.appendChild(el));
}
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggleFxColBtn');
  if(!btn) return;
  btn.addEventListener('click', () => {
    const collapsed = document.body.classList.toggle('fxCollapsed');
    document.documentElement.classList.toggle('fxCollapsed', collapsed);
    btn.textContent = collapsed ? '左カラムを表示' : '左カラムを折りたたむ';
    btn.classList.toggle('active', collapsed);
    moveRoisMemoBlocksForFxCollapse(collapsed);
  });
});

// ---- キャラクターシート（右側カラム）の出力機能 ----
function convertFormFieldsToText(root){
  const replaced = [];
  root.querySelectorAll('input, select, textarea').forEach(el => {
    if(el.type === 'checkbox' || el.type === 'radio' || el.type === 'hidden' || el.type === 'file') return;
    let text = '';
    const isTextarea = el.tagName === 'TEXTAREA';
    if(el.tagName === 'SELECT'){
      const opt = el.options[el.selectedIndex];
      text = opt ? opt.text : '';
    } else {
      text = el.value;
    }
    const span = document.createElement(isTextarea ? 'div' : 'span');
    span.className = 'print-text-field' + (isTextarea ? ' print-text-block' : '');
    span.textContent = text && text.trim() ? text : '\u00A0';
    el.insertAdjacentElement('afterend', span);
    el.dataset.printHidden = '1';
    el.style.display = 'none';
    replaced.push({ el, span });
  });
  return () => {
    replaced.forEach(({ el, span }) => {
      span.remove();
      el.style.display = '';
      delete el.dataset.printHidden;
    });
  };
}

function withPrintLayout(callback){
  const collapsedCards = [...document.querySelectorAll('.charCol .collapsible-card.collapsed')];
  collapsedCards.forEach(c => c.classList.remove('collapsed'));
  document.body.classList.add('printMode');
  document.documentElement.classList.add('printMode');
  const restoreFields = convertFormFieldsToText(document.querySelector('.charCol'));
  const restore = () => {
    restoreFields();
    document.body.classList.remove('printMode');
    document.documentElement.classList.remove('printMode');
    collapsedCards.forEach(c => c.classList.add('collapsed'));
  };
  try{
    const result = callback();
    if(result && typeof result.finally === 'function'){
      result.finally(restore);
    } else {
      restore();
    }
  }catch(err){
    restore();
    throw err;
  }
}

function exportCharColAsImage(){
  const target = document.querySelector('.charCol');
  if(!target || typeof html2canvas === 'undefined'){
    alert('画像出力用のライブラリを読み込めませんでした。通信環境をご確認ください。');
    return;
  }
  withPrintLayout(() => {
    // スクロール位置がずれていると画像が途中で切れることがあるため、先頭に戻す
    window.scrollTo(0, 0);
    return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
      .then(() => {
        const rect = target.getBoundingClientRect();
        return html2canvas(target, {
          backgroundColor: '#ffffff',
          scale: 2,
          useCORS: true,
          scrollX: 0,
          scrollY: 0,
          width: target.scrollWidth,
          height: target.scrollHeight,
          windowWidth: document.documentElement.scrollWidth,
          windowHeight: target.scrollHeight + Math.max(0, rect.top)
        });
      })
      .then(canvas => {
        const link = document.createElement('a');
        link.download = 'character_sheet.jpg';
        link.href = canvas.toDataURL('image/jpeg', 0.92);
        link.click();
      })
      .catch(() => {
        alert('画像の出力に失敗しました。');
      });
  });
}

function exportCharColAsPdf(){
  withPrintLayout(() => {
    window.print();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const imgBtn = document.getElementById('exportImageBtn');
  if(imgBtn) imgBtn.addEventListener('click', exportCharColAsImage);
  const pdfBtn = document.getElementById('exportPdfBtn');
  if(pdfBtn) pdfBtn.addEventListener('click', exportCharColAsPdf);
});
