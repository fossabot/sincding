const fs = require('fs');

class Folder {
  constructor(id, name, url, parent) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.parent = parent;
  }

  path(path) {
    return this.parent.path(path) + '/' + this.name;
  }

  shouldCreate(path) {
    if (fs.existsSync(this.path(path))) {
      return false;
    }
    return true;
  }

  create(path) {
    try {
      console.log('Creating folder');
      console.log(this.parent.name + '/' + this.name);
      fs.mkdirSync(this.path(path));
    } catch (err) {}
  }
}

module.exports = Folder;