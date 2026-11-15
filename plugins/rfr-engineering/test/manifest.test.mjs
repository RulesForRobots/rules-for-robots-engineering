import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const manifest = JSON.parse(readFileSync(new URL('../.claude-plugin/plugin.json', import.meta.url), 'utf8'));

test('the manifest names the plugin after its folder and gives a version', () => {
  assert.equal(manifest.name, new URL('..', import.meta.url).pathname.split('/').filter(Boolean).pop());
  assert.match(manifest.version, /^\d+\.\d+\.\d+/);
});
