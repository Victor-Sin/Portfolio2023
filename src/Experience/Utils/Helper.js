export const extendFragmentShader = (originalShader, customCode) => {
    const hook = 'INJECTION_POINT';
    const index = originalShader.indexOf(hook);
    return originalShader.slice(0, index) + customCode + originalShader.slice(index + hook.length);
};