import path from 'path'

import fs from '@magic/fs'

export const writeFile = async ([name, content], config) =>
  await fs.writeFile(path.join(config.DIR.PUBLIC, name), content)
