import { ConfigAPI, PluginItem } from '@babel/core';
import { TransformOptions } from '@babel/preset-env';

module.exports = (api: ConfigAPI): { presets: PluginItem[], plugins: PluginItem[] } => {
    const isTest = api.env('test');

    const presets: PluginItem[] = [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ];

    const plugins: PluginItem[] = [];

    // Добавьте плагины, если это необходимо для вашего проекта

    return {
        presets,
        plugins,
    };
};