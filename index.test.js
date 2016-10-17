/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-10-17
 * @author Liang <liang@maichong.it>
 */

export async function handleAdd(com, run) {
  let count = com.data.pics.length;
  await run();
  if (com.data.pics.length - count !== 1) {
    throw new Error('点击增加照片后没有正常增加一张照片');
  }
}
