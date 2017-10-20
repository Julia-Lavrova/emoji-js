import {
  noExtra,
  toSurrogatePairs,
  toCodePoint,
  parseEmoji,
} from '../index';

describe('noExtra', () => {
  it('should return empty string', () => {
    expect(noExtra('\ufe0f'.toString(16))).toBe('');
  });

  it('should return empty string', () => {
    expect(noExtra('\u200d'.toString(16))).toBe('');
  });

  it('should return not changed string', () => {
    expect(noExtra('\u300d'.toString(16))).toBe('」');
  });
});

describe('toSurrogatePairs', () => {
  it('should return unicode for pair smile', () => {
    expect(toSurrogatePairs('👩‍👩‍👧‍👧')).toBe('\\ud83d\\udc69\\u200d\\ud83d\\udc69\\u200d\\ud83d\\udc67\\u200d\\ud83d\\udc67');
  });

  it('should return unicode for pair smile', () => {
    expect(toSurrogatePairs('💕')).toBe('\\ud83d\\udc95');
  });

  it('should return unicode for pair smile', () => {
    expect(toSurrogatePairs('✊🏻')).toBe('\\u270a\\ud83c\\udffb');
  });
});

describe('toCodePoint', () => {
  it('should return unicode for pair smile', () => {
    expect(toCodePoint('ud83dudc69u200dud83dudc69u200dud83dudc67u200dud83dudc67'))
      .toBe('75-64-38-33-64-75-64-63-36-39-75-32-30-30-64-75-64-38-33-64-75-64-63-36-39-75-32-30-30-64-75-64-38-33-64-75-64-63-36-37-75-32-30-30-64-75-64-38-33-64-75-64-63-36-37');
  });

  it('should return unicode for pair smile', () => {
    expect(toCodePoint('ud83dudc95')).toBe('75-64-38-33-64-75-64-63-39-35');
  });

  it('should return unicode for pair smile', () => {
    expect(toCodePoint('u270aud83cudffb')).toBe('75-32-37-30-61-75-64-38-33-63-75-64-66-66-62');
  });
});

describe('parseEmoji', () => {
  it('should return text with img emoji', () => {
    expect(parseEmoji('test 💕')).toBe('test <img class="emoji" alt="💕" src="../apple40/1f495.png" />');
  });

  it('should return text with img emoji', () => {
    expect(parseEmoji('Привет, 👨‍❤️‍💋‍👨')).toBe('Привет, <img class="emoji" alt="👨‍❤️‍💋‍👨" src="../apple40/1f468-2764-1f48b-1f468.png" />');
  });

  it('should return text with img emoji with params', () => {
    expect(parseEmoji('I ❤ JS', {
      class: 'smile',
      alt: false,
      path: 'img',
    })).toBe('I <img class="smile" alt="" src="img/apple40/2764.png" /> JS');
  });
});
