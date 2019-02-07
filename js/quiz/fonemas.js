function fonemas(palavra) {
    //verificando fonemas
    // p - b
    if (palavra["palavra"].includes('p') && palavra["count"]) {
        var troca = palavra["palavra"].replace("p", "b");
        palavra["count"]--;
    } else if (palavra["palavra"].includes('b') && palavra["count"]) {
        var troca = palavra["palavra"].replace("b", "p");
        palavra["count"]--;
    }
    //f - v
    if (palavra["palavra"].includes('f') && palavra["count"]) {
        var troca = palavra["palavra"].replace("f", "v");
        palavra["count"]--;
    } else if (palavra["palavra"].includes('v') && palavra["count"]) {
        var troca = palavra["palavra"].replace("v", "f");
        palavra["count"]--;
    }
    //t - d
    if (palavra["palavra"].includes('t') && palavra["count"]) {
        var troca = palavra["palavra"].replace("t", "d");
        palavra["count"]--;
    } else if (palavra["palavra"].includes('d') && palavra["count"]) {
        var troca = palavra["palavra"].replace("d", "t");
        palavra["count"]--;
    }
    // r - l
    if (palavra["palavra"].includes('l') && palavra["count"]) {
        var troca = palavra["palavra"].replace("l", "r");
        palavra["count"]--;
    } else if (palavra["palavra"].includes('r') && palavra["count"]) {
        var troca = palavra["palavra"].replace("r", "l");
        palavra["count"]--;
    }
    //f - s
    if (palavra["palavra"].includes('f') && palavra["count"]) {
        var troca = palavra["palavra"].replace("f", "s");
        palavra["count"]--;
    } else if (palavra["palavra"].includes('s') && palavra["count"]) {
        var troca = palavra["palavra"].replace("s", "f");
        palavra["count"]--;
    }
    //j - z
    if (palavra["palavra"].includes('j') && palavra["count"]) {
        var troca = palavra["palavra"].replace("j", "z");
        palavra["count"]--;
    } else if (palavra["palavra"].includes('z') && palavra["count"]) {
        var troca = palavra["palavra"].replace("z", "j");
        palavra["count"]--;
    }
    //x - s
    if (palavra["palavra"].includes('x') && palavra["count"]) {
        var troca = palavra["palavra"].replace("x", "s");
        palavra["count"]--;
    } else if (palavra["palavra"].includes('s') && palavra["count"]) {
        var troca = palavra["palavra"].replace("s", "x");
        palavra["count"]--;
    }
    // m - n
    if (palavra["palavra"].includes('m') && palavra["count"]) {
        var troca = palavra["palavra"].replace("m", "n");
        palavra["count"]--;
    } else if (palavra["palavra"].includes('n') && palavra["count"]) {
        var troca = palavra["palavra"].replace("n", "m");
        palavra["count"]--;
    }

    // a - o 
    if (palavra["palavra"].includes('a') && palavra["count"]) {
        var troca = palavra["palavra"].replace("a", "o");
        palavra["count"]--;
    } else if (palavra["palavra"].includes('o') && palavra["count"]) {
        var troca = palavra["palavra"].replace("o", "a");
        palavra["count"]--;
    }

    // e - i 
    if (palavra["palavra"].includes('e') && palavra["count"]) {
        var troca = palavra["palavra"].replace("e", "i");
        palavra["count"]--;
    } else if (palavra["palavra"].includes('o') && palavra["count"]) {
        var troca = palavra["palavra"].replace("i", "e");
        palavra["count"]--;
    }

    return troca;
};