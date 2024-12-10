var vi = Object.defineProperty;
var Ei = (e, u, r) => u in e ? vi(e, u, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[u] = r;
var _ = (e, u, r) => (Ei(e, typeof u != "symbol" ? u + "" : u, r), r);
import {
    m as o,
    l as $e,
    s as hi,
    Q as mi,
    a as Fi,
    b as Nu,
    P as Di
} from "./vendor.b7bb6fa2.js";
const Ai = function() {
    const u = document.createElement("link")
        .relList;
    if (u && u.supports && u.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
    new MutationObserver(i => {
            for (const t of i)
                if (t.type === "childList")
                    for (const s of t.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && n(s)
        })
        .observe(document, {
            childList: !0,
            subtree: !0
        });

    function r(i) {
        const t = {};
        return i.integrity && (t.integrity = i.integrity), i.referrerpolicy && (t.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? t.credentials = "include" : i.crossorigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t
    }

    function n(i) {
        if (i.ep) return;
        i.ep = !0;
        const t = r(i);
        fetch(i.href, t)
    }
};
Ai();
var y;
(function(e) {
    e[e.Unknown = 0] = "Unknown", e[e.Alt = 1] = "Alt", e[e.Backspace = 2] = "Backspace", e[e.CapsLock = 3] = "CapsLock", e[e.Control = 4] = "Control", e[e.Delete = 5] = "Delete", e[e.DownArrow = 6] = "DownArrow", e[e.End = 7] = "End", e[e.Escape = 8] = "Escape", e[e.F1 = 9] = "F1", e[e.F10 = 10] = "F10", e[e.F11 = 11] = "F11", e[e.F12 = 12] = "F12", e[e.F2 = 13] = "F2", e[e.F3 = 14] = "F3", e[e.F4 = 15] = "F4", e[e.F5 = 16] = "F5", e[e.F6 = 17] = "F6", e[e.F7 = 18] = "F7", e[e.F8 = 19] = "F8", e[e.F9 = 20] = "F9", e[e.Home = 21] = "Home", e[e.LeftArrow = 22] = "LeftArrow", e[e.Meta = 23] = "Meta", e[e.Option = 24] = "Option", e[e.PageDown = 25] = "PageDown", e[e.PageUp = 26] = "PageUp", e[e.Return = 27] = "Return", e[e.RightArrow = 28] = "RightArrow", e[e.Shift = 29] = "Shift", e[e.Space = 30] = "Space", e[e.Tab = 31] = "Tab", e[e.UpArrow = 32] = "UpArrow", e[e.Numpad0 = 33] = "Numpad0", e[e.Numpad1 = 34] = "Numpad1", e[e.Numpad2 = 35] = "Numpad2", e[e.Numpad3 = 36] = "Numpad3", e[e.Numpad4 = 37] = "Numpad4", e[e.Numpad5 = 38] = "Numpad5", e[e.Numpad6 = 39] = "Numpad6", e[e.Numpad7 = 40] = "Numpad7", e[e.Numpad8 = 41] = "Numpad8", e[e.Numpad9 = 42] = "Numpad9", e[e.Cancel = 43] = "Cancel", e[e.Clear = 44] = "Clear", e[e.Menu = 45] = "Menu", e[e.Pause = 46] = "Pause", e[e.Kana = 47] = "Kana", e[e.Hangul = 48] = "Hangul", e[e.Junja = 49] = "Junja", e[e.Final = 50] = "Final", e[e.Hanja = 51] = "Hanja", e[e.Kanji = 52] = "Kanji", e[e.Convert = 53] = "Convert", e[e.Select = 54] = "Select", e[e.Print = 55] = "Print", e[e.Execute = 56] = "Execute", e[e.Snapshot = 57] = "Snapshot", e[e.Insert = 58] = "Insert", e[e.Help = 59] = "Help", e[e.Sleep = 60] = "Sleep", e[e.Separator = 61] = "Separator", e[e.Scroll = 62] = "Scroll", e[e.NumLock = 63] = "NumLock", e[e.RWin = 64] = "RWin", e[e.Apps = 65] = "Apps", e[e.Multiply = 66] = "Multiply", e[e.Add = 67] = "Add", e[e.Subtract = 68] = "Subtract", e[e.Decimal = 69] = "Decimal", e[e.Divide = 70] = "Divide", e[e.Equals = 71] = "Equals", e[e.NumpadEnter = 72] = "NumpadEnter", e[e.RShift = 73] = "RShift", e[e.RControl = 74] = "RControl", e[e.RAlt = 75] = "RAlt", e[e.CtrlAltDel = 100] = "CtrlAltDel", e[e.LockScreen = 101] = "LockScreen", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
})(y || (y = {}));

function je(e) {
    switch (e) {
        case 0:
        case "Unknown":
            return 0;
        case 1:
        case "Alt":
            return 1;
        case 2:
        case "Backspace":
            return 2;
        case 3:
        case "CapsLock":
            return 3;
        case 4:
        case "Control":
            return 4;
        case 5:
        case "Delete":
            return 5;
        case 6:
        case "DownArrow":
            return 6;
        case 7:
        case "End":
            return 7;
        case 8:
        case "Escape":
            return 8;
        case 9:
        case "F1":
            return 9;
        case 10:
        case "F10":
            return 10;
        case 11:
        case "F11":
            return 11;
        case 12:
        case "F12":
            return 12;
        case 13:
        case "F2":
            return 13;
        case 14:
        case "F3":
            return 14;
        case 15:
        case "F4":
            return 15;
        case 16:
        case "F5":
            return 16;
        case 17:
        case "F6":
            return 17;
        case 18:
        case "F7":
            return 18;
        case 19:
        case "F8":
            return 19;
        case 20:
        case "F9":
            return 20;
        case 21:
        case "Home":
            return 21;
        case 22:
        case "LeftArrow":
            return 22;
        case 23:
        case "Meta":
            return 23;
        case 24:
        case "Option":
            return 24;
        case 25:
        case "PageDown":
            return 25;
        case 26:
        case "PageUp":
            return 26;
        case 27:
        case "Return":
            return 27;
        case 28:
        case "RightArrow":
            return 28;
        case 29:
        case "Shift":
            return 29;
        case 30:
        case "Space":
            return 30;
        case 31:
        case "Tab":
            return 31;
        case 32:
        case "UpArrow":
            return 32;
        case 33:
        case "Numpad0":
            return 33;
        case 34:
        case "Numpad1":
            return 34;
        case 35:
        case "Numpad2":
            return 35;
        case 36:
        case "Numpad3":
            return 36;
        case 37:
        case "Numpad4":
            return 37;
        case 38:
        case "Numpad5":
            return 38;
        case 39:
        case "Numpad6":
            return 39;
        case 40:
        case "Numpad7":
            return 40;
        case 41:
        case "Numpad8":
            return 41;
        case 42:
        case "Numpad9":
            return 42;
        case 43:
        case "Cancel":
            return 43;
        case 44:
        case "Clear":
            return 44;
        case 45:
        case "Menu":
            return 45;
        case 46:
        case "Pause":
            return 46;
        case 47:
        case "Kana":
            return 47;
        case 48:
        case "Hangul":
            return 48;
        case 49:
        case "Junja":
            return 49;
        case 50:
        case "Final":
            return 50;
        case 51:
        case "Hanja":
            return 51;
        case 52:
        case "Kanji":
            return 52;
        case 53:
        case "Convert":
            return 53;
        case 54:
        case "Select":
            return 54;
        case 55:
        case "Print":
            return 55;
        case 56:
        case "Execute":
            return 56;
        case 57:
        case "Snapshot":
            return 57;
        case 58:
        case "Insert":
            return 58;
        case 59:
        case "Help":
            return 59;
        case 60:
        case "Sleep":
            return 60;
        case 61:
        case "Separator":
            return 61;
        case 62:
        case "Scroll":
            return 62;
        case 63:
        case "NumLock":
            return 63;
        case 64:
        case "RWin":
            return 64;
        case 65:
        case "Apps":
            return 65;
        case 66:
        case "Multiply":
            return 66;
        case 67:
        case "Add":
            return 67;
        case 68:
        case "Subtract":
            return 68;
        case 69:
        case "Decimal":
            return 69;
        case 70:
        case "Divide":
            return 70;
        case 71:
        case "Equals":
            return 71;
        case 72:
        case "NumpadEnter":
            return 72;
        case 73:
        case "RShift":
            return 73;
        case 74:
        case "RControl":
            return 74;
        case 75:
        case "RAlt":
            return 75;
        case 100:
        case "CtrlAltDel":
            return 100;
        case 101:
        case "LockScreen":
            return 101;
        case -1:
        case "UNRECOGNIZED":
        default:
            return -1
    }
}

function ou(e) {
    switch (e) {
        case 0:
            return "Unknown";
        case 1:
            return "Alt";
        case 2:
            return "Backspace";
        case 3:
            return "CapsLock";
        case 4:
            return "Control";
        case 5:
            return "Delete";
        case 6:
            return "DownArrow";
        case 7:
            return "End";
        case 8:
            return "Escape";
        case 9:
            return "F1";
        case 10:
            return "F10";
        case 11:
            return "F11";
        case 12:
            return "F12";
        case 13:
            return "F2";
        case 14:
            return "F3";
        case 15:
            return "F4";
        case 16:
            return "F5";
        case 17:
            return "F6";
        case 18:
            return "F7";
        case 19:
            return "F8";
        case 20:
            return "F9";
        case 21:
            return "Home";
        case 22:
            return "LeftArrow";
        case 23:
            return "Meta";
        case 24:
            return "Option";
        case 25:
            return "PageDown";
        case 26:
            return "PageUp";
        case 27:
            return "Return";
        case 28:
            return "RightArrow";
        case 29:
            return "Shift";
        case 30:
            return "Space";
        case 31:
            return "Tab";
        case 32:
            return "UpArrow";
        case 33:
            return "Numpad0";
        case 34:
            return "Numpad1";
        case 35:
            return "Numpad2";
        case 36:
            return "Numpad3";
        case 37:
            return "Numpad4";
        case 38:
            return "Numpad5";
        case 39:
            return "Numpad6";
        case 40:
            return "Numpad7";
        case 41:
            return "Numpad8";
        case 42:
            return "Numpad9";
        case 43:
            return "Cancel";
        case 44:
            return "Clear";
        case 45:
            return "Menu";
        case 46:
            return "Pause";
        case 47:
            return "Kana";
        case 48:
            return "Hangul";
        case 49:
            return "Junja";
        case 50:
            return "Final";
        case 51:
            return "Hanja";
        case 52:
            return "Kanji";
        case 53:
            return "Convert";
        case 54:
            return "Select";
        case 55:
            return "Print";
        case 56:
            return "Execute";
        case 57:
            return "Snapshot";
        case 58:
            return "Insert";
        case 59:
            return "Help";
        case 60:
            return "Sleep";
        case 61:
            return "Separator";
        case 62:
            return "Scroll";
        case 63:
            return "NumLock";
        case 64:
            return "RWin";
        case 65:
            return "Apps";
        case 66:
            return "Multiply";
        case 67:
            return "Add";
        case 68:
            return "Subtract";
        case 69:
            return "Decimal";
        case 70:
            return "Divide";
        case 71:
            return "Equals";
        case 72:
            return "NumpadEnter";
        case 73:
            return "RShift";
        case 74:
            return "RControl";
        case 75:
            return "RAlt";
        case 100:
            return "CtrlAltDel";
        case 101:
            return "LockScreen";
        default:
            return "UNKNOWN"
    }
}
var xu;
(function(e) {
    e[e.Dir = 0] = "Dir", e[e.DirLink = 2] = "DirLink", e[e.DirDrive = 3] = "DirDrive", e[e.File = 4] = "File", e[e.FileLink = 5] = "FileLink", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
})(xu || (xu = {}));

function ki(e) {
    switch (e) {
        case 0:
        case "Dir":
            return 0;
        case 2:
        case "DirLink":
            return 2;
        case 3:
        case "DirDrive":
            return 3;
        case 4:
        case "File":
            return 4;
        case 5:
        case "FileLink":
            return 5;
        case -1:
        case "UNRECOGNIZED":
        default:
            return -1
    }
}

function yi(e) {
    switch (e) {
        case 0:
            return "Dir";
        case 2:
            return "DirLink";
        case 3:
            return "DirDrive";
        case 4:
            return "File";
        case 5:
            return "FileLink";
        default:
            return "UNKNOWN"
    }
}
var H;
(function(e) {
    e[e.NotSet = 0] = "NotSet", e[e.Low = 2] = "Low", e[e.Balanced = 3] = "Balanced", e[e.Best = 4] = "Best", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
})(H || (H = {}));

function Ci(e) {
    switch (e) {
        case 0:
        case "NotSet":
            return 0;
        case 2:
        case "Low":
            return 2;
        case 3:
        case "Balanced":
            return 3;
        case 4:
        case "Best":
            return 4;
        case -1:
        case "UNRECOGNIZED":
        default:
            return -1
    }
}

function Bi(e) {
    switch (e) {
        case 0:
            return "NotSet";
        case 2:
            return "Low";
        case 3:
            return "Balanced";
        case 4:
            return "Best";
        default:
            return "UNKNOWN"
    }
}
var Z;
(function(e) {
    e[e.Keyboard = 0] = "Keyboard", e[e.Clipboard = 2] = "Clipboard", e[e.Audio = 3] = "Audio", e[e.File = 4] = "File", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
})(Z || (Z = {}));

function Si(e) {
    switch (e) {
        case 0:
        case "Keyboard":
            return 0;
        case 2:
        case "Clipboard":
            return 2;
        case 3:
        case "Audio":
            return 3;
        case 4:
        case "File":
            return 4;
        case -1:
        case "UNRECOGNIZED":
        default:
            return -1
    }
}

function wi(e) {
    switch (e) {
        case 0:
            return "Keyboard";
        case 2:
            return "Clipboard";
        case 3:
            return "Audio";
        case 4:
            return "File";
        default:
            return "UNKNOWN"
    }
}
var x;
(function(e) {
    e[e.NotSet = 0] = "NotSet", e[e.No = 1] = "No", e[e.Yes = 2] = "Yes", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
})(x || (x = {}));

function R(e) {
    switch (e) {
        case 0:
        case "NotSet":
            return 0;
        case 1:
        case "No":
            return 1;
        case 2:
        case "Yes":
            return 2;
        case -1:
        case "UNRECOGNIZED":
        default:
            return -1
    }
}

function P(e) {
    switch (e) {
        case 0:
            return "NotSet";
        case 1:
            return "No";
        case 2:
            return "Yes";
        default:
            return "UNKNOWN"
    }
}

function Ru() {
    return {
        data: new Uint8Array,
        key: !1,
        pts: 0
    }
}
const G = {
    encode(e, u = o.Writer.create()) {
        return e.data.length !== 0 && u.uint32(10)
            .bytes(e.data), e.key === !0 && u.uint32(16)
            .bool(e.key), e.pts !== 0 && u.uint32(24)
            .int64(e.pts), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Ru();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.data = r.bytes();
                    break;
                case 2:
                    i.key = r.bool();
                    break;
                case 3:
                    i.pts = z(r.int64());
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            data: a(e.data) ? h(e.data) : new Uint8Array,
            key: a(e.key) ? Boolean(e.key) : !1,
            pts: a(e.pts) ? Number(e.pts) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.data !== void 0 && (u.data = m(e.data !== void 0 ? e.data : new Uint8Array)), e.key !== void 0 && (u.key = e.key), e.pts !== void 0 && (u.pts = Math.round(e.pts)), u
    },
    fromPartial(e) {
        var r, n, i;
        const u = Ru();
        return u.data = (r = e.data) != null ? r : new Uint8Array, u.key = (n = e.key) != null ? n : !1, u.pts = (i = e.pts) != null ? i : 0, u
    }
};

function Pu() {
    return {
        frames: []
    }
}
const K = {
    encode(e, u = o.Writer.create()) {
        for (const r of e.frames) G.encode(r, u.uint32(10)
                .fork())
            .ldelim();
        return u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Pu();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.frames.push(G.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            frames: Array.isArray(e == null ? void 0 : e.frames) ? e.frames.map(u => G.fromJSON(u)) : []
        }
    },
    toJSON(e) {
        const u = {};
        return e.frames ? u.frames = e.frames.map(r => r ? G.toJSON(r) : void 0) : u.frames = [], u
    },
    fromPartial(e) {
        var r;
        const u = Pu();
        return u.frames = ((r = e.frames) == null ? void 0 : r.map(n => G.fromPartial(n))) || [], u
    }
};

function bu() {
    return {
        compress: !1
    }
}
const Y = {
    encode(e, u = o.Writer.create()) {
        return e.compress === !0 && u.uint32(8)
            .bool(e.compress), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = bu();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.compress = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            compress: a(e.compress) ? Boolean(e.compress) : !1
        }
    },
    toJSON(e) {
        const u = {};
        return e.compress !== void 0 && (u.compress = e.compress), u
    },
    fromPartial(e) {
        var r;
        const u = bu();
        return u.compress = (r = e.compress) != null ? r : !1, u
    }
};

function Ou() {
    return {
        compress: !1,
        stride: 0
    }
}
const Q = {
    encode(e, u = o.Writer.create()) {
        return e.compress === !0 && u.uint32(8)
            .bool(e.compress), e.stride !== 0 && u.uint32(16)
            .int32(e.stride), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Ou();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.compress = r.bool();
                    break;
                case 2:
                    i.stride = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            compress: a(e.compress) ? Boolean(e.compress) : !1,
            stride: a(e.stride) ? Number(e.stride) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.compress !== void 0 && (u.compress = e.compress), e.stride !== void 0 && (u.stride = Math.round(e.stride)), u
    },
    fromPartial(e) {
        var r, n;
        const u = Ou();
        return u.compress = (r = e.compress) != null ? r : !1, u.stride = (n = e.stride) != null ? n : 0, u
    }
};

function Iu() {
    return {
        vp9s: void 0,
        rgb: void 0,
        yuv: void 0
    }
}
const X = {
    encode(e, u = o.Writer.create()) {
        return e.vp9s !== void 0 && K.encode(e.vp9s, u.uint32(50)
                .fork())
            .ldelim(), e.rgb !== void 0 && Y.encode(e.rgb, u.uint32(58)
                .fork())
            .ldelim(), e.yuv !== void 0 && Q.encode(e.yuv, u.uint32(66)
                .fork())
            .ldelim(), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Iu();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 6:
                    i.vp9s = K.decode(r, r.uint32());
                    break;
                case 7:
                    i.rgb = Y.decode(r, r.uint32());
                    break;
                case 8:
                    i.yuv = Q.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            vp9s: a(e.vp9s) ? K.fromJSON(e.vp9s) : void 0,
            rgb: a(e.rgb) ? Y.fromJSON(e.rgb) : void 0,
            yuv: a(e.yuv) ? Q.fromJSON(e.yuv) : void 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.vp9s !== void 0 && (u.vp9s = e.vp9s ? K.toJSON(e.vp9s) : void 0), e.rgb !== void 0 && (u.rgb = e.rgb ? Y.toJSON(e.rgb) : void 0), e.yuv !== void 0 && (u.yuv = e.yuv ? Q.toJSON(e.yuv) : void 0), u
    },
    fromPartial(e) {
        const u = Iu();
        return u.vp9s = e.vp9s !== void 0 && e.vp9s !== null ? K.fromPartial(e.vp9s) : void 0, u.rgb = e.rgb !== void 0 && e.rgb !== null ? Y.fromPartial(e.rgb) : void 0, u.yuv = e.yuv !== void 0 && e.yuv !== null ? Q.fromPartial(e.yuv) : void 0, u
    }
};

function Tu() {
    return {
        id: "",
        pk: new Uint8Array
    }
}
const Mu = {
    encode(e, u = o.Writer.create()) {
        return e.id !== "" && u.uint32(10)
            .string(e.id), e.pk.length !== 0 && u.uint32(18)
            .bytes(e.pk), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Tu();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.id = r.string();
                    break;
                case 2:
                    i.pk = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            id: a(e.id) ? String(e.id) : "",
            pk: a(e.pk) ? h(e.pk) : new Uint8Array
        }
    },
    toJSON(e) {
        const u = {};
        return e.id !== void 0 && (u.id = e.id), e.pk !== void 0 && (u.pk = m(e.pk !== void 0 ? e.pk : new Uint8Array)), u
    },
    fromPartial(e) {
        var r, n;
        const u = Tu();
        return u.id = (r = e.id) != null ? r : "", u.pk = (n = e.pk) != null ? n : new Uint8Array, u
    }
};

function qu() {
    return {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        name: "",
        online: !1
    }
}
const $ = {
    encode(e, u = o.Writer.create()) {
        return e.x !== 0 && u.uint32(8)
            .sint32(e.x), e.y !== 0 && u.uint32(16)
            .sint32(e.y), e.width !== 0 && u.uint32(24)
            .int32(e.width), e.height !== 0 && u.uint32(32)
            .int32(e.height), e.name !== "" && u.uint32(42)
            .string(e.name), e.online === !0 && u.uint32(48)
            .bool(e.online), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = qu();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.x = r.sint32();
                    break;
                case 2:
                    i.y = r.sint32();
                    break;
                case 3:
                    i.width = r.int32();
                    break;
                case 4:
                    i.height = r.int32();
                    break;
                case 5:
                    i.name = r.string();
                    break;
                case 6:
                    i.online = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            x: a(e.x) ? Number(e.x) : 0,
            y: a(e.y) ? Number(e.y) : 0,
            width: a(e.width) ? Number(e.width) : 0,
            height: a(e.height) ? Number(e.height) : 0,
            name: a(e.name) ? String(e.name) : "",
            online: a(e.online) ? Boolean(e.online) : !1
        }
    },
    toJSON(e) {
        const u = {};
        return e.x !== void 0 && (u.x = Math.round(e.x)), e.y !== void 0 && (u.y = Math.round(e.y)), e.width !== void 0 && (u.width = Math.round(e.width)), e.height !== void 0 && (u.height = Math.round(e.height)), e.name !== void 0 && (u.name = e.name), e.online !== void 0 && (u.online = e.online), u
    },
    fromPartial(e) {
        var r, n, i, t, s, l;
        const u = qu();
        return u.x = (r = e.x) != null ? r : 0, u.y = (n = e.y) != null ? n : 0, u.width = (i = e.width) != null ? i : 0, u.height = (t = e.height) != null ? t : 0, u.name = (s = e.name) != null ? s : "", u.online = (l = e.online) != null ? l : !1, u
    }
};

function zu() {
    return {
        host: "",
        port: 0
    }
}
const j = {
    encode(e, u = o.Writer.create()) {
        return e.host !== "" && u.uint32(10)
            .string(e.host), e.port !== 0 && u.uint32(16)
            .int32(e.port), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = zu();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.host = r.string();
                    break;
                case 2:
                    i.port = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            host: a(e.host) ? String(e.host) : "",
            port: a(e.port) ? Number(e.port) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.host !== void 0 && (u.host = e.host), e.port !== void 0 && (u.port = Math.round(e.port)), u
    },
    fromPartial(e) {
        var r, n;
        const u = zu();
        return u.host = (r = e.host) != null ? r : "", u.port = (n = e.port) != null ? n : 0, u
    }
};

function Ju() {
    return {
        dir: "",
        show_hidden: !1
    }
}
const ee = {
    encode(e, u = o.Writer.create()) {
        return e.dir !== "" && u.uint32(10)
            .string(e.dir), e.show_hidden === !0 && u.uint32(16)
            .bool(e.show_hidden), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Ju();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.dir = r.string();
                    break;
                case 2:
                    i.show_hidden = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            dir: a(e.dir) ? String(e.dir) : "",
            show_hidden: a(e.show_hidden) ? Boolean(e.show_hidden) : !1
        }
    },
    toJSON(e) {
        const u = {};
        return e.dir !== void 0 && (u.dir = e.dir), e.show_hidden !== void 0 && (u.show_hidden = e.show_hidden), u
    },
    fromPartial(e) {
        var r, n;
        const u = Ju();
        return u.dir = (r = e.dir) != null ? r : "", u.show_hidden = (n = e.show_hidden) != null ? n : !1, u
    }
};

function Lu() {
    return {
        username: "",
        password: new Uint8Array,
        my_id: "",
        my_name: "",
        option: void 0,
        file_transfer: void 0,
        port_forward: void 0,
        video_ack_required: !1
    }
}
const T = {
    encode(e, u = o.Writer.create()) {
        return e.username !== "" && u.uint32(10)
            .string(e.username), e.password.length !== 0 && u.uint32(18)
            .bytes(e.password), e.my_id !== "" && u.uint32(34)
            .string(e.my_id), e.my_name !== "" && u.uint32(42)
            .string(e.my_name), e.option !== void 0 && f.encode(e.option, u.uint32(50)
                .fork())
            .ldelim(), e.file_transfer !== void 0 && ee.encode(e.file_transfer, u.uint32(58)
                .fork())
            .ldelim(), e.port_forward !== void 0 && j.encode(e.port_forward, u.uint32(66)
                .fork())
            .ldelim(), e.video_ack_required === !0 && u.uint32(72)
            .bool(e.video_ack_required), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Lu();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.username = r.string();
                    break;
                case 2:
                    i.password = r.bytes();
                    break;
                case 4:
                    i.my_id = r.string();
                    break;
                case 5:
                    i.my_name = r.string();
                    break;
                case 6:
                    i.option = f.decode(r, r.uint32());
                    break;
                case 7:
                    i.file_transfer = ee.decode(r, r.uint32());
                    break;
                case 8:
                    i.port_forward = j.decode(r, r.uint32());
                    break;
                case 9:
                    i.video_ack_required = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            username: a(e.username) ? String(e.username) : "",
            password: a(e.password) ? h(e.password) : new Uint8Array,
            my_id: a(e.my_id) ? String(e.my_id) : "",
            my_name: a(e.my_name) ? String(e.my_name) : "",
            option: a(e.option) ? f.fromJSON(e.option) : void 0,
            file_transfer: a(e.file_transfer) ? ee.fromJSON(e.file_transfer) : void 0,
            port_forward: a(e.port_forward) ? j.fromJSON(e.port_forward) : void 0,
            video_ack_required: a(e.video_ack_required) ? Boolean(e.video_ack_required) : !1
        }
    },
    toJSON(e) {
        const u = {};
        return e.username !== void 0 && (u.username = e.username), e.password !== void 0 && (u.password = m(e.password !== void 0 ? e.password : new Uint8Array)), e.my_id !== void 0 && (u.my_id = e.my_id), e.my_name !== void 0 && (u.my_name = e.my_name), e.option !== void 0 && (u.option = e.option ? f.toJSON(e.option) : void 0), e.file_transfer !== void 0 && (u.file_transfer = e.file_transfer ? ee.toJSON(e.file_transfer) : void 0), e.port_forward !== void 0 && (u.port_forward = e.port_forward ? j.toJSON(e.port_forward) : void 0), e.video_ack_required !== void 0 && (u.video_ack_required = e.video_ack_required), u
    },
    fromPartial(e) {
        var r, n, i, t, s;
        const u = Lu();
        return u.username = (r = e.username) != null ? r : "", u.password = (n = e.password) != null ? n : new Uint8Array, u.my_id = (i = e.my_id) != null ? i : "", u.my_name = (t = e.my_name) != null ? t : "", u.option = e.option !== void 0 && e.option !== null ? f.fromPartial(e.option) : void 0, u.file_transfer = e.file_transfer !== void 0 && e.file_transfer !== null ? ee.fromPartial(e.file_transfer) : void 0, u.port_forward = e.port_forward !== void 0 && e.port_forward !== null ? j.fromPartial(e.port_forward) : void 0, u.video_ack_required = (s = e.video_ack_required) != null ? s : !1, u
    }
};

function Uu() {
    return {
        text: ""
    }
}
const ue = {
    encode(e, u = o.Writer.create()) {
        return e.text !== "" && u.uint32(10)
            .string(e.text), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Uu();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.text = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            text: a(e.text) ? String(e.text) : ""
        }
    },
    toJSON(e) {
        const u = {};
        return e.text !== void 0 && (u.text = e.text), u
    },
    fromPartial(e) {
        var r;
        const u = Uu();
        return u.text = (r = e.text) != null ? r : "", u
    }
};

function Vu() {
    return {
        username: "",
        hostname: "",
        platform: "",
        displays: [],
        current_display: 0,
        sas_enabled: !1,
        version: "",
        conn_id: 0
    }
}
const re = {
    encode(e, u = o.Writer.create()) {
        e.username !== "" && u.uint32(10)
            .string(e.username), e.hostname !== "" && u.uint32(18)
            .string(e.hostname), e.platform !== "" && u.uint32(26)
            .string(e.platform);
        for (const r of e.displays) $.encode(r, u.uint32(34)
                .fork())
            .ldelim();
        return e.current_display !== 0 && u.uint32(40)
            .int32(e.current_display), e.sas_enabled === !0 && u.uint32(48)
            .bool(e.sas_enabled), e.version !== "" && u.uint32(58)
            .string(e.version), e.conn_id !== 0 && u.uint32(64)
            .int32(e.conn_id), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Vu();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.username = r.string();
                    break;
                case 2:
                    i.hostname = r.string();
                    break;
                case 3:
                    i.platform = r.string();
                    break;
                case 4:
                    i.displays.push($.decode(r, r.uint32()));
                    break;
                case 5:
                    i.current_display = r.int32();
                    break;
                case 6:
                    i.sas_enabled = r.bool();
                    break;
                case 7:
                    i.version = r.string();
                    break;
                case 8:
                    i.conn_id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            username: a(e.username) ? String(e.username) : "",
            hostname: a(e.hostname) ? String(e.hostname) : "",
            platform: a(e.platform) ? String(e.platform) : "",
            displays: Array.isArray(e == null ? void 0 : e.displays) ? e.displays.map(u => $.fromJSON(u)) : [],
            current_display: a(e.current_display) ? Number(e.current_display) : 0,
            sas_enabled: a(e.sas_enabled) ? Boolean(e.sas_enabled) : !1,
            version: a(e.version) ? String(e.version) : "",
            conn_id: a(e.conn_id) ? Number(e.conn_id) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.username !== void 0 && (u.username = e.username), e.hostname !== void 0 && (u.hostname = e.hostname), e.platform !== void 0 && (u.platform = e.platform), e.displays ? u.displays = e.displays.map(r => r ? $.toJSON(r) : void 0) : u.displays = [], e.current_display !== void 0 && (u.current_display = Math.round(e.current_display)), e.sas_enabled !== void 0 && (u.sas_enabled = e.sas_enabled), e.version !== void 0 && (u.version = e.version), e.conn_id !== void 0 && (u.conn_id = Math.round(e.conn_id)), u
    },
    fromPartial(e) {
        var r, n, i, t, s, l, c, p;
        const u = Vu();
        return u.username = (r = e.username) != null ? r : "", u.hostname = (n = e.hostname) != null ? n : "", u.platform = (i = e.platform) != null ? i : "", u.displays = ((t = e.displays) == null ? void 0 : t.map(v => $.fromPartial(v))) || [], u.current_display = (s = e.current_display) != null ? s : 0, u.sas_enabled = (l = e.sas_enabled) != null ? l : !1, u.version = (c = e.version) != null ? c : "", u.conn_id = (p = e.conn_id) != null ? p : 0, u
    }
};

function Wu() {
    return {
        error: void 0,
        peer_info: void 0
    }
}
const ie = {
    encode(e, u = o.Writer.create()) {
        return e.error !== void 0 && u.uint32(10)
            .string(e.error), e.peer_info !== void 0 && re.encode(e.peer_info, u.uint32(18)
                .fork())
            .ldelim(), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Wu();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.error = r.string();
                    break;
                case 2:
                    i.peer_info = re.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            error: a(e.error) ? String(e.error) : void 0,
            peer_info: a(e.peer_info) ? re.fromJSON(e.peer_info) : void 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.error !== void 0 && (u.error = e.error), e.peer_info !== void 0 && (u.peer_info = e.peer_info ? re.toJSON(e.peer_info) : void 0), u
    },
    fromPartial(e) {
        var r;
        const u = Wu();
        return u.error = (r = e.error) != null ? r : void 0, u.peer_info = e.peer_info !== void 0 && e.peer_info !== null ? re.fromPartial(e.peer_info) : void 0, u
    }
};

function Hu() {
    return {
        mask: 0,
        x: 0,
        y: 0,
        modifiers: []
    }
}
const M = {
    encode(e, u = o.Writer.create()) {
        e.mask !== 0 && u.uint32(8)
            .int32(e.mask), e.x !== 0 && u.uint32(16)
            .sint32(e.x), e.y !== 0 && u.uint32(24)
            .sint32(e.y), u.uint32(34)
            .fork();
        for (const r of e.modifiers) u.int32(r);
        return u.ldelim(), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Hu();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.mask = r.int32();
                    break;
                case 2:
                    i.x = r.sint32();
                    break;
                case 3:
                    i.y = r.sint32();
                    break;
                case 4:
                    if ((t & 7) == 2) {
                        const s = r.uint32() + r.pos;
                        for (; r.pos < s;) i.modifiers.push(r.int32())
                    } else i.modifiers.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            mask: a(e.mask) ? Number(e.mask) : 0,
            x: a(e.x) ? Number(e.x) : 0,
            y: a(e.y) ? Number(e.y) : 0,
            modifiers: Array.isArray(e == null ? void 0 : e.modifiers) ? e.modifiers.map(u => je(u)) : []
        }
    },
    toJSON(e) {
        const u = {};
        return e.mask !== void 0 && (u.mask = Math.round(e.mask)), e.x !== void 0 && (u.x = Math.round(e.x)), e.y !== void 0 && (u.y = Math.round(e.y)), e.modifiers ? u.modifiers = e.modifiers.map(r => ou(r)) : u.modifiers = [], u
    },
    fromPartial(e) {
        var r, n, i, t;
        const u = Hu();
        return u.mask = (r = e.mask) != null ? r : 0, u.x = (n = e.x) != null ? n : 0, u.y = (i = e.y) != null ? i : 0, u.modifiers = ((t = e.modifiers) == null ? void 0 : t.map(s => s)) || [], u
    }
};

function Zu() {
    return {
        down: !1,
        press: !1,
        control_key: void 0,
        chr: void 0,
        unicode: void 0,
        seq: void 0,
        modifiers: []
    }
}
const E = {
    encode(e, u = o.Writer.create()) {
        e.down === !0 && u.uint32(8)
            .bool(e.down), e.press === !0 && u.uint32(16)
            .bool(e.press), e.control_key !== void 0 && u.uint32(24)
            .int32(e.control_key), e.chr !== void 0 && u.uint32(32)
            .uint32(e.chr), e.unicode !== void 0 && u.uint32(40)
            .uint32(e.unicode), e.seq !== void 0 && u.uint32(50)
            .string(e.seq), u.uint32(66)
            .fork();
        for (const r of e.modifiers) u.int32(r);
        return u.ldelim(), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Zu();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.down = r.bool();
                    break;
                case 2:
                    i.press = r.bool();
                    break;
                case 3:
                    i.control_key = r.int32();
                    break;
                case 4:
                    i.chr = r.uint32();
                    break;
                case 5:
                    i.unicode = r.uint32();
                    break;
                case 6:
                    i.seq = r.string();
                    break;
                case 8:
                    if ((t & 7) == 2) {
                        const s = r.uint32() + r.pos;
                        for (; r.pos < s;) i.modifiers.push(r.int32())
                    } else i.modifiers.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            down: a(e.down) ? Boolean(e.down) : !1,
            press: a(e.press) ? Boolean(e.press) : !1,
            control_key: a(e.control_key) ? je(e.control_key) : void 0,
            chr: a(e.chr) ? Number(e.chr) : void 0,
            unicode: a(e.unicode) ? Number(e.unicode) : void 0,
            seq: a(e.seq) ? String(e.seq) : void 0,
            modifiers: Array.isArray(e == null ? void 0 : e.modifiers) ? e.modifiers.map(u => je(u)) : []
        }
    },
    toJSON(e) {
        const u = {};
        return e.down !== void 0 && (u.down = e.down), e.press !== void 0 && (u.press = e.press), e.control_key !== void 0 && (u.control_key = e.control_key !== void 0 ? ou(e.control_key) : void 0), e.chr !== void 0 && (u.chr = Math.round(e.chr)), e.unicode !== void 0 && (u.unicode = Math.round(e.unicode)), e.seq !== void 0 && (u.seq = e.seq), e.modifiers ? u.modifiers = e.modifiers.map(r => ou(r)) : u.modifiers = [], u
    },
    fromPartial(e) {
        var r, n, i, t, s, l, c;
        const u = Zu();
        return u.down = (r = e.down) != null ? r : !1, u.press = (n = e.press) != null ? n : !1, u.control_key = (i = e.control_key) != null ? i : void 0, u.chr = (t = e.chr) != null ? t : void 0, u.unicode = (s = e.unicode) != null ? s : void 0, u.seq = (l = e.seq) != null ? l : void 0, u.modifiers = ((c = e.modifiers) == null ? void 0 : c.map(p => p)) || [], u
    }
};

function Gu() {
    return {
        id: 0,
        hotx: 0,
        hoty: 0,
        width: 0,
        height: 0,
        colors: new Uint8Array
    }
}
const ne = {
    encode(e, u = o.Writer.create()) {
        return e.id !== 0 && u.uint32(8)
            .uint64(e.id), e.hotx !== 0 && u.uint32(16)
            .sint32(e.hotx), e.hoty !== 0 && u.uint32(24)
            .sint32(e.hoty), e.width !== 0 && u.uint32(32)
            .int32(e.width), e.height !== 0 && u.uint32(40)
            .int32(e.height), e.colors.length !== 0 && u.uint32(50)
            .bytes(e.colors), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Gu();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.id = z(r.uint64());
                    break;
                case 2:
                    i.hotx = r.sint32();
                    break;
                case 3:
                    i.hoty = r.sint32();
                    break;
                case 4:
                    i.width = r.int32();
                    break;
                case 5:
                    i.height = r.int32();
                    break;
                case 6:
                    i.colors = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            id: a(e.id) ? Number(e.id) : 0,
            hotx: a(e.hotx) ? Number(e.hotx) : 0,
            hoty: a(e.hoty) ? Number(e.hoty) : 0,
            width: a(e.width) ? Number(e.width) : 0,
            height: a(e.height) ? Number(e.height) : 0,
            colors: a(e.colors) ? h(e.colors) : new Uint8Array
        }
    },
    toJSON(e) {
        const u = {};
        return e.id !== void 0 && (u.id = Math.round(e.id)), e.hotx !== void 0 && (u.hotx = Math.round(e.hotx)), e.hoty !== void 0 && (u.hoty = Math.round(e.hoty)), e.width !== void 0 && (u.width = Math.round(e.width)), e.height !== void 0 && (u.height = Math.round(e.height)), e.colors !== void 0 && (u.colors = m(e.colors !== void 0 ? e.colors : new Uint8Array)), u
    },
    fromPartial(e) {
        var r, n, i, t, s, l;
        const u = Gu();
        return u.id = (r = e.id) != null ? r : 0, u.hotx = (n = e.hotx) != null ? n : 0, u.hoty = (i = e.hoty) != null ? i : 0, u.width = (t = e.width) != null ? t : 0, u.height = (s = e.height) != null ? s : 0, u.colors = (l = e.colors) != null ? l : new Uint8Array, u
    }
};

function Ku() {
    return {
        x: 0,
        y: 0
    }
}
const te = {
    encode(e, u = o.Writer.create()) {
        return e.x !== 0 && u.uint32(8)
            .sint32(e.x), e.y !== 0 && u.uint32(16)
            .sint32(e.y), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Ku();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.x = r.sint32();
                    break;
                case 2:
                    i.y = r.sint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            x: a(e.x) ? Number(e.x) : 0,
            y: a(e.y) ? Number(e.y) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.x !== void 0 && (u.x = Math.round(e.x)), e.y !== void 0 && (u.y = Math.round(e.y)), u
    },
    fromPartial(e) {
        var r, n;
        const u = Ku();
        return u.x = (r = e.x) != null ? r : 0, u.y = (n = e.y) != null ? n : 0, u
    }
};

function Yu() {
    return {
        salt: "",
        challenge: ""
    }
}
const oe = {
    encode(e, u = o.Writer.create()) {
        return e.salt !== "" && u.uint32(10)
            .string(e.salt), e.challenge !== "" && u.uint32(18)
            .string(e.challenge), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Yu();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.salt = r.string();
                    break;
                case 2:
                    i.challenge = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            salt: a(e.salt) ? String(e.salt) : "",
            challenge: a(e.challenge) ? String(e.challenge) : ""
        }
    },
    toJSON(e) {
        const u = {};
        return e.salt !== void 0 && (u.salt = e.salt), e.challenge !== void 0 && (u.challenge = e.challenge), u
    },
    fromPartial(e) {
        var r, n;
        const u = Yu();
        return u.salt = (r = e.salt) != null ? r : "", u.challenge = (n = e.challenge) != null ? n : "", u
    }
};

function Qu() {
    return {
        compress: !1,
        content: new Uint8Array
    }
}
const ae = {
    encode(e, u = o.Writer.create()) {
        return e.compress === !0 && u.uint32(8)
            .bool(e.compress), e.content.length !== 0 && u.uint32(18)
            .bytes(e.content), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Qu();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.compress = r.bool();
                    break;
                case 2:
                    i.content = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            compress: a(e.compress) ? Boolean(e.compress) : !1,
            content: a(e.content) ? h(e.content) : new Uint8Array
        }
    },
    toJSON(e) {
        const u = {};
        return e.compress !== void 0 && (u.compress = e.compress), e.content !== void 0 && (u.content = m(e.content !== void 0 ? e.content : new Uint8Array)), u
    },
    fromPartial(e) {
        var r, n;
        const u = Qu();
        return u.compress = (r = e.compress) != null ? r : !1, u.content = (n = e.content) != null ? n : new Uint8Array, u
    }
};

function Xu() {
    return {
        entry_type: 0,
        name: "",
        is_hidden: !1,
        size: 0,
        modified_time: 0
    }
}
const C = {
    encode(e, u = o.Writer.create()) {
        return e.entry_type !== 0 && u.uint32(8)
            .int32(e.entry_type), e.name !== "" && u.uint32(18)
            .string(e.name), e.is_hidden === !0 && u.uint32(24)
            .bool(e.is_hidden), e.size !== 0 && u.uint32(32)
            .uint64(e.size), e.modified_time !== 0 && u.uint32(40)
            .uint64(e.modified_time), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Xu();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.entry_type = r.int32();
                    break;
                case 2:
                    i.name = r.string();
                    break;
                case 3:
                    i.is_hidden = r.bool();
                    break;
                case 4:
                    i.size = z(r.uint64());
                    break;
                case 5:
                    i.modified_time = z(r.uint64());
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            entry_type: a(e.entry_type) ? ki(e.entry_type) : 0,
            name: a(e.name) ? String(e.name) : "",
            is_hidden: a(e.is_hidden) ? Boolean(e.is_hidden) : !1,
            size: a(e.size) ? Number(e.size) : 0,
            modified_time: a(e.modified_time) ? Number(e.modified_time) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.entry_type !== void 0 && (u.entry_type = yi(e.entry_type)), e.name !== void 0 && (u.name = e.name), e.is_hidden !== void 0 && (u.is_hidden = e.is_hidden), e.size !== void 0 && (u.size = Math.round(e.size)), e.modified_time !== void 0 && (u.modified_time = Math.round(e.modified_time)), u
    },
    fromPartial(e) {
        var r, n, i, t, s;
        const u = Xu();
        return u.entry_type = (r = e.entry_type) != null ? r : 0, u.name = (n = e.name) != null ? n : "", u.is_hidden = (i = e.is_hidden) != null ? i : !1, u.size = (t = e.size) != null ? t : 0, u.modified_time = (s = e.modified_time) != null ? s : 0, u
    }
};

function $u() {
    return {
        id: 0,
        path: "",
        entries: []
    }
}
const se = {
    encode(e, u = o.Writer.create()) {
        e.id !== 0 && u.uint32(8)
            .int32(e.id), e.path !== "" && u.uint32(18)
            .string(e.path);
        for (const r of e.entries) C.encode(r, u.uint32(26)
                .fork())
            .ldelim();
        return u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = $u();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.id = r.int32();
                    break;
                case 2:
                    i.path = r.string();
                    break;
                case 3:
                    i.entries.push(C.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            id: a(e.id) ? Number(e.id) : 0,
            path: a(e.path) ? String(e.path) : "",
            entries: Array.isArray(e == null ? void 0 : e.entries) ? e.entries.map(u => C.fromJSON(u)) : []
        }
    },
    toJSON(e) {
        const u = {};
        return e.id !== void 0 && (u.id = Math.round(e.id)), e.path !== void 0 && (u.path = e.path), e.entries ? u.entries = e.entries.map(r => r ? C.toJSON(r) : void 0) : u.entries = [], u
    },
    fromPartial(e) {
        var r, n, i;
        const u = $u();
        return u.id = (r = e.id) != null ? r : 0, u.path = (n = e.path) != null ? n : "", u.entries = ((i = e.entries) == null ? void 0 : i.map(t => C.fromPartial(t))) || [], u
    }
};

function ju() {
    return {
        path: "",
        include_hidden: !1
    }
}
const de = {
    encode(e, u = o.Writer.create()) {
        return e.path !== "" && u.uint32(10)
            .string(e.path), e.include_hidden === !0 && u.uint32(16)
            .bool(e.include_hidden), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = ju();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.path = r.string();
                    break;
                case 2:
                    i.include_hidden = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            path: a(e.path) ? String(e.path) : "",
            include_hidden: a(e.include_hidden) ? Boolean(e.include_hidden) : !1
        }
    },
    toJSON(e) {
        const u = {};
        return e.path !== void 0 && (u.path = e.path), e.include_hidden !== void 0 && (u.include_hidden = e.include_hidden), u
    },
    fromPartial(e) {
        var r, n;
        const u = ju();
        return u.path = (r = e.path) != null ? r : "", u.include_hidden = (n = e.include_hidden) != null ? n : !1, u
    }
};

function er() {
    return {
        id: 0,
        path: "",
        include_hidden: !1
    }
}
const le = {
    encode(e, u = o.Writer.create()) {
        return e.id !== 0 && u.uint32(8)
            .int32(e.id), e.path !== "" && u.uint32(18)
            .string(e.path), e.include_hidden === !0 && u.uint32(24)
            .bool(e.include_hidden), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = er();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.id = r.int32();
                    break;
                case 2:
                    i.path = r.string();
                    break;
                case 3:
                    i.include_hidden = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            id: a(e.id) ? Number(e.id) : 0,
            path: a(e.path) ? String(e.path) : "",
            include_hidden: a(e.include_hidden) ? Boolean(e.include_hidden) : !1
        }
    },
    toJSON(e) {
        const u = {};
        return e.id !== void 0 && (u.id = Math.round(e.id)), e.path !== void 0 && (u.path = e.path), e.include_hidden !== void 0 && (u.include_hidden = e.include_hidden), u
    },
    fromPartial(e) {
        var r, n, i;
        const u = er();
        return u.id = (r = e.id) != null ? r : 0, u.path = (n = e.path) != null ? n : "", u.include_hidden = (i = e.include_hidden) != null ? i : !1, u
    }
};

function ur() {
    return {
        read_dir: void 0,
        send: void 0,
        receive: void 0,
        create: void 0,
        remove_dir: void 0,
        remove_file: void 0,
        all_files: void 0,
        cancel: void 0
    }
}
const ce = {
    encode(e, u = o.Writer.create()) {
        return e.read_dir !== void 0 && de.encode(e.read_dir, u.uint32(10)
                .fork())
            .ldelim(), e.send !== void 0 && Ee.encode(e.send, u.uint32(18)
                .fork())
            .ldelim(), e.receive !== void 0 && me.encode(e.receive, u.uint32(26)
                .fork())
            .ldelim(), e.create !== void 0 && Ae.encode(e.create, u.uint32(34)
                .fork())
            .ldelim(), e.remove_dir !== void 0 && Fe.encode(e.remove_dir, u.uint32(42)
                .fork())
            .ldelim(), e.remove_file !== void 0 && De.encode(e.remove_file, u.uint32(50)
                .fork())
            .ldelim(), e.all_files !== void 0 && le.encode(e.all_files, u.uint32(58)
                .fork())
            .ldelim(), e.cancel !== void 0 && pe.encode(e.cancel, u.uint32(66)
                .fork())
            .ldelim(), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = ur();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.read_dir = de.decode(r, r.uint32());
                    break;
                case 2:
                    i.send = Ee.decode(r, r.uint32());
                    break;
                case 3:
                    i.receive = me.decode(r, r.uint32());
                    break;
                case 4:
                    i.create = Ae.decode(r, r.uint32());
                    break;
                case 5:
                    i.remove_dir = Fe.decode(r, r.uint32());
                    break;
                case 6:
                    i.remove_file = De.decode(r, r.uint32());
                    break;
                case 7:
                    i.all_files = le.decode(r, r.uint32());
                    break;
                case 8:
                    i.cancel = pe.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            read_dir: a(e.read_dir) ? de.fromJSON(e.read_dir) : void 0,
            send: a(e.send) ? Ee.fromJSON(e.send) : void 0,
            receive: a(e.receive) ? me.fromJSON(e.receive) : void 0,
            create: a(e.create) ? Ae.fromJSON(e.create) : void 0,
            remove_dir: a(e.remove_dir) ? Fe.fromJSON(e.remove_dir) : void 0,
            remove_file: a(e.remove_file) ? De.fromJSON(e.remove_file) : void 0,
            all_files: a(e.all_files) ? le.fromJSON(e.all_files) : void 0,
            cancel: a(e.cancel) ? pe.fromJSON(e.cancel) : void 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.read_dir !== void 0 && (u.read_dir = e.read_dir ? de.toJSON(e.read_dir) : void 0), e.send !== void 0 && (u.send = e.send ? Ee.toJSON(e.send) : void 0), e.receive !== void 0 && (u.receive = e.receive ? me.toJSON(e.receive) : void 0), e.create !== void 0 && (u.create = e.create ? Ae.toJSON(e.create) : void 0), e.remove_dir !== void 0 && (u.remove_dir = e.remove_dir ? Fe.toJSON(e.remove_dir) : void 0), e.remove_file !== void 0 && (u.remove_file = e.remove_file ? De.toJSON(e.remove_file) : void 0), e.all_files !== void 0 && (u.all_files = e.all_files ? le.toJSON(e.all_files) : void 0), e.cancel !== void 0 && (u.cancel = e.cancel ? pe.toJSON(e.cancel) : void 0), u
    },
    fromPartial(e) {
        const u = ur();
        return u.read_dir = e.read_dir !== void 0 && e.read_dir !== null ? de.fromPartial(e.read_dir) : void 0, u.send = e.send !== void 0 && e.send !== null ? Ee.fromPartial(e.send) : void 0, u.receive = e.receive !== void 0 && e.receive !== null ? me.fromPartial(e.receive) : void 0, u.create = e.create !== void 0 && e.create !== null ? Ae.fromPartial(e.create) : void 0, u.remove_dir = e.remove_dir !== void 0 && e.remove_dir !== null ? Fe.fromPartial(e.remove_dir) : void 0, u.remove_file = e.remove_file !== void 0 && e.remove_file !== null ? De.fromPartial(e.remove_file) : void 0, u.all_files = e.all_files !== void 0 && e.all_files !== null ? le.fromPartial(e.all_files) : void 0, u.cancel = e.cancel !== void 0 && e.cancel !== null ? pe.fromPartial(e.cancel) : void 0, u
    }
};

function rr() {
    return {
        id: 0
    }
}
const pe = {
    encode(e, u = o.Writer.create()) {
        return e.id !== 0 && u.uint32(8)
            .int32(e.id), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = rr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            id: a(e.id) ? Number(e.id) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.id !== void 0 && (u.id = Math.round(e.id)), u
    },
    fromPartial(e) {
        var r;
        const u = rr();
        return u.id = (r = e.id) != null ? r : 0, u
    }
};

function ir() {
    return {
        dir: void 0,
        block: void 0,
        error: void 0,
        done: void 0
    }
}
const _e = {
    encode(e, u = o.Writer.create()) {
        return e.dir !== void 0 && se.encode(e.dir, u.uint32(10)
                .fork())
            .ldelim(), e.block !== void 0 && fe.encode(e.block, u.uint32(18)
                .fork())
            .ldelim(), e.error !== void 0 && ve.encode(e.error, u.uint32(26)
                .fork())
            .ldelim(), e.done !== void 0 && he.encode(e.done, u.uint32(34)
                .fork())
            .ldelim(), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = ir();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.dir = se.decode(r, r.uint32());
                    break;
                case 2:
                    i.block = fe.decode(r, r.uint32());
                    break;
                case 3:
                    i.error = ve.decode(r, r.uint32());
                    break;
                case 4:
                    i.done = he.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            dir: a(e.dir) ? se.fromJSON(e.dir) : void 0,
            block: a(e.block) ? fe.fromJSON(e.block) : void 0,
            error: a(e.error) ? ve.fromJSON(e.error) : void 0,
            done: a(e.done) ? he.fromJSON(e.done) : void 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.dir !== void 0 && (u.dir = e.dir ? se.toJSON(e.dir) : void 0), e.block !== void 0 && (u.block = e.block ? fe.toJSON(e.block) : void 0), e.error !== void 0 && (u.error = e.error ? ve.toJSON(e.error) : void 0), e.done !== void 0 && (u.done = e.done ? he.toJSON(e.done) : void 0), u
    },
    fromPartial(e) {
        const u = ir();
        return u.dir = e.dir !== void 0 && e.dir !== null ? se.fromPartial(e.dir) : void 0, u.block = e.block !== void 0 && e.block !== null ? fe.fromPartial(e.block) : void 0, u.error = e.error !== void 0 && e.error !== null ? ve.fromPartial(e.error) : void 0, u.done = e.done !== void 0 && e.done !== null ? he.fromPartial(e.done) : void 0, u
    }
};

function nr() {
    return {
        id: 0,
        file_num: 0,
        data: new Uint8Array,
        compressed: !1
    }
}
const fe = {
    encode(e, u = o.Writer.create()) {
        return e.id !== 0 && u.uint32(8)
            .int32(e.id), e.file_num !== 0 && u.uint32(16)
            .sint32(e.file_num), e.data.length !== 0 && u.uint32(26)
            .bytes(e.data), e.compressed === !0 && u.uint32(32)
            .bool(e.compressed), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = nr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.id = r.int32();
                    break;
                case 2:
                    i.file_num = r.sint32();
                    break;
                case 3:
                    i.data = r.bytes();
                    break;
                case 4:
                    i.compressed = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            id: a(e.id) ? Number(e.id) : 0,
            file_num: a(e.file_num) ? Number(e.file_num) : 0,
            data: a(e.data) ? h(e.data) : new Uint8Array,
            compressed: a(e.compressed) ? Boolean(e.compressed) : !1
        }
    },
    toJSON(e) {
        const u = {};
        return e.id !== void 0 && (u.id = Math.round(e.id)), e.file_num !== void 0 && (u.file_num = Math.round(e.file_num)), e.data !== void 0 && (u.data = m(e.data !== void 0 ? e.data : new Uint8Array)), e.compressed !== void 0 && (u.compressed = e.compressed), u
    },
    fromPartial(e) {
        var r, n, i, t;
        const u = nr();
        return u.id = (r = e.id) != null ? r : 0, u.file_num = (n = e.file_num) != null ? n : 0, u.data = (i = e.data) != null ? i : new Uint8Array, u.compressed = (t = e.compressed) != null ? t : !1, u
    }
};

function tr() {
    return {
        id: 0,
        error: "",
        file_num: 0
    }
}
const ve = {
    encode(e, u = o.Writer.create()) {
        return e.id !== 0 && u.uint32(8)
            .int32(e.id), e.error !== "" && u.uint32(18)
            .string(e.error), e.file_num !== 0 && u.uint32(24)
            .sint32(e.file_num), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = tr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.id = r.int32();
                    break;
                case 2:
                    i.error = r.string();
                    break;
                case 3:
                    i.file_num = r.sint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            id: a(e.id) ? Number(e.id) : 0,
            error: a(e.error) ? String(e.error) : "",
            file_num: a(e.file_num) ? Number(e.file_num) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.id !== void 0 && (u.id = Math.round(e.id)), e.error !== void 0 && (u.error = e.error), e.file_num !== void 0 && (u.file_num = Math.round(e.file_num)), u
    },
    fromPartial(e) {
        var r, n, i;
        const u = tr();
        return u.id = (r = e.id) != null ? r : 0, u.error = (n = e.error) != null ? n : "", u.file_num = (i = e.file_num) != null ? i : 0, u
    }
};

function or() {
    return {
        id: 0,
        path: "",
        include_hidden: !1
    }
}
const Ee = {
    encode(e, u = o.Writer.create()) {
        return e.id !== 0 && u.uint32(8)
            .int32(e.id), e.path !== "" && u.uint32(18)
            .string(e.path), e.include_hidden === !0 && u.uint32(24)
            .bool(e.include_hidden), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = or();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.id = r.int32();
                    break;
                case 2:
                    i.path = r.string();
                    break;
                case 3:
                    i.include_hidden = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            id: a(e.id) ? Number(e.id) : 0,
            path: a(e.path) ? String(e.path) : "",
            include_hidden: a(e.include_hidden) ? Boolean(e.include_hidden) : !1
        }
    },
    toJSON(e) {
        const u = {};
        return e.id !== void 0 && (u.id = Math.round(e.id)), e.path !== void 0 && (u.path = e.path), e.include_hidden !== void 0 && (u.include_hidden = e.include_hidden), u
    },
    fromPartial(e) {
        var r, n, i;
        const u = or();
        return u.id = (r = e.id) != null ? r : 0, u.path = (n = e.path) != null ? n : "", u.include_hidden = (i = e.include_hidden) != null ? i : !1, u
    }
};

function ar() {
    return {
        id: 0,
        file_num: 0
    }
}
const he = {
    encode(e, u = o.Writer.create()) {
        return e.id !== 0 && u.uint32(8)
            .int32(e.id), e.file_num !== 0 && u.uint32(16)
            .sint32(e.file_num), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = ar();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.id = r.int32();
                    break;
                case 2:
                    i.file_num = r.sint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            id: a(e.id) ? Number(e.id) : 0,
            file_num: a(e.file_num) ? Number(e.file_num) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.id !== void 0 && (u.id = Math.round(e.id)), e.file_num !== void 0 && (u.file_num = Math.round(e.file_num)), u
    },
    fromPartial(e) {
        var r, n;
        const u = ar();
        return u.id = (r = e.id) != null ? r : 0, u.file_num = (n = e.file_num) != null ? n : 0, u
    }
};

function sr() {
    return {
        id: 0,
        path: "",
        files: []
    }
}
const me = {
    encode(e, u = o.Writer.create()) {
        e.id !== 0 && u.uint32(8)
            .int32(e.id), e.path !== "" && u.uint32(18)
            .string(e.path);
        for (const r of e.files) C.encode(r, u.uint32(26)
                .fork())
            .ldelim();
        return u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = sr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.id = r.int32();
                    break;
                case 2:
                    i.path = r.string();
                    break;
                case 3:
                    i.files.push(C.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            id: a(e.id) ? Number(e.id) : 0,
            path: a(e.path) ? String(e.path) : "",
            files: Array.isArray(e == null ? void 0 : e.files) ? e.files.map(u => C.fromJSON(u)) : []
        }
    },
    toJSON(e) {
        const u = {};
        return e.id !== void 0 && (u.id = Math.round(e.id)), e.path !== void 0 && (u.path = e.path), e.files ? u.files = e.files.map(r => r ? C.toJSON(r) : void 0) : u.files = [], u
    },
    fromPartial(e) {
        var r, n, i;
        const u = sr();
        return u.id = (r = e.id) != null ? r : 0, u.path = (n = e.path) != null ? n : "", u.files = ((i = e.files) == null ? void 0 : i.map(t => C.fromPartial(t))) || [], u
    }
};

function dr() {
    return {
        id: 0,
        path: "",
        recursive: !1
    }
}
const Fe = {
    encode(e, u = o.Writer.create()) {
        return e.id !== 0 && u.uint32(8)
            .int32(e.id), e.path !== "" && u.uint32(18)
            .string(e.path), e.recursive === !0 && u.uint32(24)
            .bool(e.recursive), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = dr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.id = r.int32();
                    break;
                case 2:
                    i.path = r.string();
                    break;
                case 3:
                    i.recursive = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            id: a(e.id) ? Number(e.id) : 0,
            path: a(e.path) ? String(e.path) : "",
            recursive: a(e.recursive) ? Boolean(e.recursive) : !1
        }
    },
    toJSON(e) {
        const u = {};
        return e.id !== void 0 && (u.id = Math.round(e.id)), e.path !== void 0 && (u.path = e.path), e.recursive !== void 0 && (u.recursive = e.recursive), u
    },
    fromPartial(e) {
        var r, n, i;
        const u = dr();
        return u.id = (r = e.id) != null ? r : 0, u.path = (n = e.path) != null ? n : "", u.recursive = (i = e.recursive) != null ? i : !1, u
    }
};

function lr() {
    return {
        id: 0,
        path: "",
        file_num: 0
    }
}
const De = {
    encode(e, u = o.Writer.create()) {
        return e.id !== 0 && u.uint32(8)
            .int32(e.id), e.path !== "" && u.uint32(18)
            .string(e.path), e.file_num !== 0 && u.uint32(24)
            .sint32(e.file_num), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = lr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.id = r.int32();
                    break;
                case 2:
                    i.path = r.string();
                    break;
                case 3:
                    i.file_num = r.sint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            id: a(e.id) ? Number(e.id) : 0,
            path: a(e.path) ? String(e.path) : "",
            file_num: a(e.file_num) ? Number(e.file_num) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.id !== void 0 && (u.id = Math.round(e.id)), e.path !== void 0 && (u.path = e.path), e.file_num !== void 0 && (u.file_num = Math.round(e.file_num)), u
    },
    fromPartial(e) {
        var r, n, i;
        const u = lr();
        return u.id = (r = e.id) != null ? r : 0, u.path = (n = e.path) != null ? n : "", u.file_num = (i = e.file_num) != null ? i : 0, u
    }
};

function cr() {
    return {
        id: 0,
        path: ""
    }
}
const Ae = {
    encode(e, u = o.Writer.create()) {
        return e.id !== 0 && u.uint32(8)
            .int32(e.id), e.path !== "" && u.uint32(18)
            .string(e.path), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = cr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.id = r.int32();
                    break;
                case 2:
                    i.path = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            id: a(e.id) ? Number(e.id) : 0,
            path: a(e.path) ? String(e.path) : ""
        }
    },
    toJSON(e) {
        const u = {};
        return e.id !== void 0 && (u.id = Math.round(e.id)), e.path !== void 0 && (u.path = e.path), u
    },
    fromPartial(e) {
        var r, n;
        const u = cr();
        return u.id = (r = e.id) != null ? r : 0, u.path = (n = e.path) != null ? n : "", u
    }
};

function pr() {
    return {
        conn_id: 0
    }
}
const ke = {
    encode(e, u = o.Writer.create()) {
        return e.conn_id !== 0 && u.uint32(8)
            .int32(e.conn_id), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = pr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.conn_id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            conn_id: a(e.conn_id) ? Number(e.conn_id) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.conn_id !== void 0 && (u.conn_id = Math.round(e.conn_id)), u
    },
    fromPartial(e) {
        var r;
        const u = pr();
        return u.conn_id = (r = e.conn_id) != null ? r : 0, u
    }
};

function _r() {
    return {
        conn_id: 0,
        id: 0,
        format: ""
    }
}
const ye = {
    encode(e, u = o.Writer.create()) {
        return e.conn_id !== 0 && u.uint32(8)
            .int32(e.conn_id), e.id !== 0 && u.uint32(16)
            .int32(e.id), e.format !== "" && u.uint32(26)
            .string(e.format), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = _r();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.conn_id = r.int32();
                    break;
                case 2:
                    i.id = r.int32();
                    break;
                case 3:
                    i.format = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            conn_id: a(e.conn_id) ? Number(e.conn_id) : 0,
            id: a(e.id) ? Number(e.id) : 0,
            format: a(e.format) ? String(e.format) : ""
        }
    },
    toJSON(e) {
        const u = {};
        return e.conn_id !== void 0 && (u.conn_id = Math.round(e.conn_id)), e.id !== void 0 && (u.id = Math.round(e.id)), e.format !== void 0 && (u.format = e.format), u
    },
    fromPartial(e) {
        var r, n, i;
        const u = _r();
        return u.conn_id = (r = e.conn_id) != null ? r : 0, u.id = (n = e.id) != null ? n : 0, u.format = (i = e.format) != null ? i : "", u
    }
};

function fr() {
    return {
        conn_id: 0,
        formats: []
    }
}
const Ce = {
    encode(e, u = o.Writer.create()) {
        e.conn_id !== 0 && u.uint32(8)
            .int32(e.conn_id);
        for (const r of e.formats) ye.encode(r, u.uint32(18)
                .fork())
            .ldelim();
        return u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = fr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.conn_id = r.int32();
                    break;
                case 2:
                    i.formats.push(ye.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            conn_id: a(e.conn_id) ? Number(e.conn_id) : 0,
            formats: Array.isArray(e == null ? void 0 : e.formats) ? e.formats.map(u => ye.fromJSON(u)) : []
        }
    },
    toJSON(e) {
        const u = {};
        return e.conn_id !== void 0 && (u.conn_id = Math.round(e.conn_id)), e.formats ? u.formats = e.formats.map(r => r ? ye.toJSON(r) : void 0) : u.formats = [], u
    },
    fromPartial(e) {
        var r, n;
        const u = fr();
        return u.conn_id = (r = e.conn_id) != null ? r : 0, u.formats = ((n = e.formats) == null ? void 0 : n.map(i => ye.fromPartial(i))) || [], u
    }
};

function vr() {
    return {
        conn_id: 0,
        msg_flags: 0
    }
}
const Be = {
    encode(e, u = o.Writer.create()) {
        return e.conn_id !== 0 && u.uint32(8)
            .int32(e.conn_id), e.msg_flags !== 0 && u.uint32(16)
            .int32(e.msg_flags), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = vr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.conn_id = r.int32();
                    break;
                case 2:
                    i.msg_flags = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            conn_id: a(e.conn_id) ? Number(e.conn_id) : 0,
            msg_flags: a(e.msg_flags) ? Number(e.msg_flags) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.conn_id !== void 0 && (u.conn_id = Math.round(e.conn_id)), e.msg_flags !== void 0 && (u.msg_flags = Math.round(e.msg_flags)), u
    },
    fromPartial(e) {
        var r, n;
        const u = vr();
        return u.conn_id = (r = e.conn_id) != null ? r : 0, u.msg_flags = (n = e.msg_flags) != null ? n : 0, u
    }
};

function Er() {
    return {
        conn_id: 0,
        requested_format_id: 0
    }
}
const Se = {
    encode(e, u = o.Writer.create()) {
        return e.conn_id !== 0 && u.uint32(8)
            .int32(e.conn_id), e.requested_format_id !== 0 && u.uint32(16)
            .int32(e.requested_format_id), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Er();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.conn_id = r.int32();
                    break;
                case 2:
                    i.requested_format_id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            conn_id: a(e.conn_id) ? Number(e.conn_id) : 0,
            requested_format_id: a(e.requested_format_id) ? Number(e.requested_format_id) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.conn_id !== void 0 && (u.conn_id = Math.round(e.conn_id)), e.requested_format_id !== void 0 && (u.requested_format_id = Math.round(e.requested_format_id)), u
    },
    fromPartial(e) {
        var r, n;
        const u = Er();
        return u.conn_id = (r = e.conn_id) != null ? r : 0, u.requested_format_id = (n = e.requested_format_id) != null ? n : 0, u
    }
};

function hr() {
    return {
        conn_id: 0,
        msg_flags: 0,
        format_data: new Uint8Array
    }
}
const we = {
    encode(e, u = o.Writer.create()) {
        return e.conn_id !== 0 && u.uint32(8)
            .int32(e.conn_id), e.msg_flags !== 0 && u.uint32(16)
            .int32(e.msg_flags), e.format_data.length !== 0 && u.uint32(26)
            .bytes(e.format_data), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = hr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.conn_id = r.int32();
                    break;
                case 2:
                    i.msg_flags = r.int32();
                    break;
                case 3:
                    i.format_data = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            conn_id: a(e.conn_id) ? Number(e.conn_id) : 0,
            msg_flags: a(e.msg_flags) ? Number(e.msg_flags) : 0,
            format_data: a(e.format_data) ? h(e.format_data) : new Uint8Array
        }
    },
    toJSON(e) {
        const u = {};
        return e.conn_id !== void 0 && (u.conn_id = Math.round(e.conn_id)), e.msg_flags !== void 0 && (u.msg_flags = Math.round(e.msg_flags)), e.format_data !== void 0 && (u.format_data = m(e.format_data !== void 0 ? e.format_data : new Uint8Array)), u
    },
    fromPartial(e) {
        var r, n, i;
        const u = hr();
        return u.conn_id = (r = e.conn_id) != null ? r : 0, u.msg_flags = (n = e.msg_flags) != null ? n : 0, u.format_data = (i = e.format_data) != null ? i : new Uint8Array, u
    }
};

function mr() {
    return {
        conn_id: 0,
        stream_id: 0,
        list_index: 0,
        dw_flags: 0,
        n_position_low: 0,
        n_position_high: 0,
        cb_requested: 0,
        have_clip_data_id: !1,
        clip_data_id: 0
    }
}
const ge = {
    encode(e, u = o.Writer.create()) {
        return e.conn_id !== 0 && u.uint32(8)
            .int32(e.conn_id), e.stream_id !== 0 && u.uint32(16)
            .int32(e.stream_id), e.list_index !== 0 && u.uint32(24)
            .int32(e.list_index), e.dw_flags !== 0 && u.uint32(32)
            .int32(e.dw_flags), e.n_position_low !== 0 && u.uint32(40)
            .int32(e.n_position_low), e.n_position_high !== 0 && u.uint32(48)
            .int32(e.n_position_high), e.cb_requested !== 0 && u.uint32(56)
            .int32(e.cb_requested), e.have_clip_data_id === !0 && u.uint32(64)
            .bool(e.have_clip_data_id), e.clip_data_id !== 0 && u.uint32(72)
            .int32(e.clip_data_id), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = mr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.conn_id = r.int32();
                    break;
                case 2:
                    i.stream_id = r.int32();
                    break;
                case 3:
                    i.list_index = r.int32();
                    break;
                case 4:
                    i.dw_flags = r.int32();
                    break;
                case 5:
                    i.n_position_low = r.int32();
                    break;
                case 6:
                    i.n_position_high = r.int32();
                    break;
                case 7:
                    i.cb_requested = r.int32();
                    break;
                case 8:
                    i.have_clip_data_id = r.bool();
                    break;
                case 9:
                    i.clip_data_id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            conn_id: a(e.conn_id) ? Number(e.conn_id) : 0,
            stream_id: a(e.stream_id) ? Number(e.stream_id) : 0,
            list_index: a(e.list_index) ? Number(e.list_index) : 0,
            dw_flags: a(e.dw_flags) ? Number(e.dw_flags) : 0,
            n_position_low: a(e.n_position_low) ? Number(e.n_position_low) : 0,
            n_position_high: a(e.n_position_high) ? Number(e.n_position_high) : 0,
            cb_requested: a(e.cb_requested) ? Number(e.cb_requested) : 0,
            have_clip_data_id: a(e.have_clip_data_id) ? Boolean(e.have_clip_data_id) : !1,
            clip_data_id: a(e.clip_data_id) ? Number(e.clip_data_id) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.conn_id !== void 0 && (u.conn_id = Math.round(e.conn_id)), e.stream_id !== void 0 && (u.stream_id = Math.round(e.stream_id)), e.list_index !== void 0 && (u.list_index = Math.round(e.list_index)), e.dw_flags !== void 0 && (u.dw_flags = Math.round(e.dw_flags)), e.n_position_low !== void 0 && (u.n_position_low = Math.round(e.n_position_low)), e.n_position_high !== void 0 && (u.n_position_high = Math.round(e.n_position_high)), e.cb_requested !== void 0 && (u.cb_requested = Math.round(e.cb_requested)), e.have_clip_data_id !== void 0 && (u.have_clip_data_id = e.have_clip_data_id), e.clip_data_id !== void 0 && (u.clip_data_id = Math.round(e.clip_data_id)), u
    },
    fromPartial(e) {
        var r, n, i, t, s, l, c, p, v;
        const u = mr();
        return u.conn_id = (r = e.conn_id) != null ? r : 0, u.stream_id = (n = e.stream_id) != null ? n : 0, u.list_index = (i = e.list_index) != null ? i : 0, u.dw_flags = (t = e.dw_flags) != null ? t : 0, u.n_position_low = (s = e.n_position_low) != null ? s : 0, u.n_position_high = (l = e.n_position_high) != null ? l : 0, u.cb_requested = (c = e.cb_requested) != null ? c : 0, u.have_clip_data_id = (p = e.have_clip_data_id) != null ? p : !1, u.clip_data_id = (v = e.clip_data_id) != null ? v : 0, u
    }
};

function Fr() {
    return {
        conn_id: 0,
        msg_flags: 0,
        stream_id: 0,
        requested_data: new Uint8Array
    }
}
const Ne = {
    encode(e, u = o.Writer.create()) {
        return e.conn_id !== 0 && u.uint32(8)
            .int32(e.conn_id), e.msg_flags !== 0 && u.uint32(24)
            .int32(e.msg_flags), e.stream_id !== 0 && u.uint32(32)
            .int32(e.stream_id), e.requested_data.length !== 0 && u.uint32(42)
            .bytes(e.requested_data), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Fr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.conn_id = r.int32();
                    break;
                case 3:
                    i.msg_flags = r.int32();
                    break;
                case 4:
                    i.stream_id = r.int32();
                    break;
                case 5:
                    i.requested_data = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            conn_id: a(e.conn_id) ? Number(e.conn_id) : 0,
            msg_flags: a(e.msg_flags) ? Number(e.msg_flags) : 0,
            stream_id: a(e.stream_id) ? Number(e.stream_id) : 0,
            requested_data: a(e.requested_data) ? h(e.requested_data) : new Uint8Array
        }
    },
    toJSON(e) {
        const u = {};
        return e.conn_id !== void 0 && (u.conn_id = Math.round(e.conn_id)), e.msg_flags !== void 0 && (u.msg_flags = Math.round(e.msg_flags)), e.stream_id !== void 0 && (u.stream_id = Math.round(e.stream_id)), e.requested_data !== void 0 && (u.requested_data = m(e.requested_data !== void 0 ? e.requested_data : new Uint8Array)), u
    },
    fromPartial(e) {
        var r, n, i, t;
        const u = Fr();
        return u.conn_id = (r = e.conn_id) != null ? r : 0, u.msg_flags = (n = e.msg_flags) != null ? n : 0, u.stream_id = (i = e.stream_id) != null ? i : 0, u.requested_data = (t = e.requested_data) != null ? t : new Uint8Array, u
    }
};

function Dr() {
    return {
        ready: void 0,
        format_list: void 0,
        format_list_response: void 0,
        format_data_request: void 0,
        format_data_response: void 0,
        file_contents_request: void 0,
        file_contents_response: void 0
    }
}
const xe = {
    encode(e, u = o.Writer.create()) {
        return e.ready !== void 0 && ke.encode(e.ready, u.uint32(10)
                .fork())
            .ldelim(), e.format_list !== void 0 && Ce.encode(e.format_list, u.uint32(18)
                .fork())
            .ldelim(), e.format_list_response !== void 0 && Be.encode(e.format_list_response, u.uint32(26)
                .fork())
            .ldelim(), e.format_data_request !== void 0 && Se.encode(e.format_data_request, u.uint32(34)
                .fork())
            .ldelim(), e.format_data_response !== void 0 && we.encode(e.format_data_response, u.uint32(42)
                .fork())
            .ldelim(), e.file_contents_request !== void 0 && ge.encode(e.file_contents_request, u.uint32(50)
                .fork())
            .ldelim(), e.file_contents_response !== void 0 && Ne.encode(e.file_contents_response, u.uint32(58)
                .fork())
            .ldelim(), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Dr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.ready = ke.decode(r, r.uint32());
                    break;
                case 2:
                    i.format_list = Ce.decode(r, r.uint32());
                    break;
                case 3:
                    i.format_list_response = Be.decode(r, r.uint32());
                    break;
                case 4:
                    i.format_data_request = Se.decode(r, r.uint32());
                    break;
                case 5:
                    i.format_data_response = we.decode(r, r.uint32());
                    break;
                case 6:
                    i.file_contents_request = ge.decode(r, r.uint32());
                    break;
                case 7:
                    i.file_contents_response = Ne.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            ready: a(e.ready) ? ke.fromJSON(e.ready) : void 0,
            format_list: a(e.format_list) ? Ce.fromJSON(e.format_list) : void 0,
            format_list_response: a(e.format_list_response) ? Be.fromJSON(e.format_list_response) : void 0,
            format_data_request: a(e.format_data_request) ? Se.fromJSON(e.format_data_request) : void 0,
            format_data_response: a(e.format_data_response) ? we.fromJSON(e.format_data_response) : void 0,
            file_contents_request: a(e.file_contents_request) ? ge.fromJSON(e.file_contents_request) : void 0,
            file_contents_response: a(e.file_contents_response) ? Ne.fromJSON(e.file_contents_response) : void 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.ready !== void 0 && (u.ready = e.ready ? ke.toJSON(e.ready) : void 0), e.format_list !== void 0 && (u.format_list = e.format_list ? Ce.toJSON(e.format_list) : void 0), e.format_list_response !== void 0 && (u.format_list_response = e.format_list_response ? Be.toJSON(e.format_list_response) : void 0), e.format_data_request !== void 0 && (u.format_data_request = e.format_data_request ? Se.toJSON(e.format_data_request) : void 0), e.format_data_response !== void 0 && (u.format_data_response = e.format_data_response ? we.toJSON(e.format_data_response) : void 0), e.file_contents_request !== void 0 && (u.file_contents_request = e.file_contents_request ? ge.toJSON(e.file_contents_request) : void 0), e.file_contents_response !== void 0 && (u.file_contents_response = e.file_contents_response ? Ne.toJSON(e.file_contents_response) : void 0), u
    },
    fromPartial(e) {
        const u = Dr();
        return u.ready = e.ready !== void 0 && e.ready !== null ? ke.fromPartial(e.ready) : void 0, u.format_list = e.format_list !== void 0 && e.format_list !== null ? Ce.fromPartial(e.format_list) : void 0, u.format_list_response = e.format_list_response !== void 0 && e.format_list_response !== null ? Be.fromPartial(e.format_list_response) : void 0, u.format_data_request = e.format_data_request !== void 0 && e.format_data_request !== null ? Se.fromPartial(e.format_data_request) : void 0, u.format_data_response = e.format_data_response !== void 0 && e.format_data_response !== null ? we.fromPartial(e.format_data_response) : void 0, u.file_contents_request = e.file_contents_request !== void 0 && e.file_contents_request !== null ? ge.fromPartial(e.file_contents_request) : void 0, u.file_contents_response = e.file_contents_response !== void 0 && e.file_contents_response !== null ? Ne.fromPartial(e.file_contents_response) : void 0, u
    }
};

function Ar() {
    return {
        display: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
}
const q = {
    encode(e, u = o.Writer.create()) {
        return e.display !== 0 && u.uint32(8)
            .int32(e.display), e.x !== 0 && u.uint32(16)
            .sint32(e.x), e.y !== 0 && u.uint32(24)
            .sint32(e.y), e.width !== 0 && u.uint32(32)
            .int32(e.width), e.height !== 0 && u.uint32(40)
            .int32(e.height), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Ar();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.display = r.int32();
                    break;
                case 2:
                    i.x = r.sint32();
                    break;
                case 3:
                    i.y = r.sint32();
                    break;
                case 4:
                    i.width = r.int32();
                    break;
                case 5:
                    i.height = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            display: a(e.display) ? Number(e.display) : 0,
            x: a(e.x) ? Number(e.x) : 0,
            y: a(e.y) ? Number(e.y) : 0,
            width: a(e.width) ? Number(e.width) : 0,
            height: a(e.height) ? Number(e.height) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.display !== void 0 && (u.display = Math.round(e.display)), e.x !== void 0 && (u.x = Math.round(e.x)), e.y !== void 0 && (u.y = Math.round(e.y)), e.width !== void 0 && (u.width = Math.round(e.width)), e.height !== void 0 && (u.height = Math.round(e.height)), u
    },
    fromPartial(e) {
        var r, n, i, t, s;
        const u = Ar();
        return u.display = (r = e.display) != null ? r : 0, u.x = (n = e.x) != null ? n : 0, u.y = (i = e.y) != null ? i : 0, u.width = (t = e.width) != null ? t : 0, u.height = (s = e.height) != null ? s : 0, u
    }
};

function kr() {
    return {
        permission: 0,
        enabled: !1
    }
}
const Re = {
    encode(e, u = o.Writer.create()) {
        return e.permission !== 0 && u.uint32(8)
            .int32(e.permission), e.enabled === !0 && u.uint32(16)
            .bool(e.enabled), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = kr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.permission = r.int32();
                    break;
                case 2:
                    i.enabled = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            permission: a(e.permission) ? Si(e.permission) : 0,
            enabled: a(e.enabled) ? Boolean(e.enabled) : !1
        }
    },
    toJSON(e) {
        const u = {};
        return e.permission !== void 0 && (u.permission = wi(e.permission)), e.enabled !== void 0 && (u.enabled = e.enabled), u
    },
    fromPartial(e) {
        var r, n;
        const u = kr();
        return u.permission = (r = e.permission) != null ? r : 0, u.enabled = (n = e.enabled) != null ? n : !1, u
    }
};

function yr() {
    return {
        image_quality: 0,
        lock_after_session_end: 0,
        show_remote_cursor: 0,
        privacy_mode: 0,
        block_input: 0,
        custom_image_quality: 0,
        disable_audio: 0,
        disable_clipboard: 0,
        enable_file_transfer: 0
    }
}
const f = {
    encode(e, u = o.Writer.create()) {
        return e.image_quality !== 0 && u.uint32(8)
            .int32(e.image_quality), e.lock_after_session_end !== 0 && u.uint32(16)
            .int32(e.lock_after_session_end), e.show_remote_cursor !== 0 && u.uint32(24)
            .int32(e.show_remote_cursor), e.privacy_mode !== 0 && u.uint32(32)
            .int32(e.privacy_mode), e.block_input !== 0 && u.uint32(40)
            .int32(e.block_input), e.custom_image_quality !== 0 && u.uint32(48)
            .int32(e.custom_image_quality), e.disable_audio !== 0 && u.uint32(56)
            .int32(e.disable_audio), e.disable_clipboard !== 0 && u.uint32(64)
            .int32(e.disable_clipboard), e.enable_file_transfer !== 0 && u.uint32(72)
            .int32(e.enable_file_transfer), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = yr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.image_quality = r.int32();
                    break;
                case 2:
                    i.lock_after_session_end = r.int32();
                    break;
                case 3:
                    i.show_remote_cursor = r.int32();
                    break;
                case 4:
                    i.privacy_mode = r.int32();
                    break;
                case 5:
                    i.block_input = r.int32();
                    break;
                case 6:
                    i.custom_image_quality = r.int32();
                    break;
                case 7:
                    i.disable_audio = r.int32();
                    break;
                case 8:
                    i.disable_clipboard = r.int32();
                    break;
                case 9:
                    i.enable_file_transfer = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            image_quality: a(e.image_quality) ? Ci(e.image_quality) : 0,
            lock_after_session_end: a(e.lock_after_session_end) ? R(e.lock_after_session_end) : 0,
            show_remote_cursor: a(e.show_remote_cursor) ? R(e.show_remote_cursor) : 0,
            privacy_mode: a(e.privacy_mode) ? R(e.privacy_mode) : 0,
            block_input: a(e.block_input) ? R(e.block_input) : 0,
            custom_image_quality: a(e.custom_image_quality) ? Number(e.custom_image_quality) : 0,
            disable_audio: a(e.disable_audio) ? R(e.disable_audio) : 0,
            disable_clipboard: a(e.disable_clipboard) ? R(e.disable_clipboard) : 0,
            enable_file_transfer: a(e.enable_file_transfer) ? R(e.enable_file_transfer) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.image_quality !== void 0 && (u.image_quality = Bi(e.image_quality)), e.lock_after_session_end !== void 0 && (u.lock_after_session_end = P(e.lock_after_session_end)), e.show_remote_cursor !== void 0 && (u.show_remote_cursor = P(e.show_remote_cursor)), e.privacy_mode !== void 0 && (u.privacy_mode = P(e.privacy_mode)), e.block_input !== void 0 && (u.block_input = P(e.block_input)), e.custom_image_quality !== void 0 && (u.custom_image_quality = Math.round(e.custom_image_quality)), e.disable_audio !== void 0 && (u.disable_audio = P(e.disable_audio)), e.disable_clipboard !== void 0 && (u.disable_clipboard = P(e.disable_clipboard)), e.enable_file_transfer !== void 0 && (u.enable_file_transfer = P(e.enable_file_transfer)), u
    },
    fromPartial(e) {
        var r, n, i, t, s, l, c, p, v;
        const u = yr();
        return u.image_quality = (r = e.image_quality) != null ? r : 0, u.lock_after_session_end = (n = e.lock_after_session_end) != null ? n : 0, u.show_remote_cursor = (i = e.show_remote_cursor) != null ? i : 0, u.privacy_mode = (t = e.privacy_mode) != null ? t : 0, u.block_input = (s = e.block_input) != null ? s : 0, u.custom_image_quality = (l = e.custom_image_quality) != null ? l : 0, u.disable_audio = (c = e.disable_audio) != null ? c : 0, u.disable_clipboard = (p = e.disable_clipboard) != null ? p : 0, u.enable_file_transfer = (v = e.enable_file_transfer) != null ? v : 0, u
    }
};

function Cr() {
    return {
        opt: void 0,
        error: ""
    }
}
const Pe = {
    encode(e, u = o.Writer.create()) {
        return e.opt !== void 0 && f.encode(e.opt, u.uint32(10)
                .fork())
            .ldelim(), e.error !== "" && u.uint32(18)
            .string(e.error), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Cr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.opt = f.decode(r, r.uint32());
                    break;
                case 2:
                    i.error = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            opt: a(e.opt) ? f.fromJSON(e.opt) : void 0,
            error: a(e.error) ? String(e.error) : ""
        }
    },
    toJSON(e) {
        const u = {};
        return e.opt !== void 0 && (u.opt = e.opt ? f.toJSON(e.opt) : void 0), e.error !== void 0 && (u.error = e.error), u
    },
    fromPartial(e) {
        var r;
        const u = Cr();
        return u.opt = e.opt !== void 0 && e.opt !== null ? f.fromPartial(e.opt) : void 0, u.error = (r = e.error) != null ? r : "", u
    }
};

function Br() {
    return {
        time: 0,
        from_client: !1
    }
}
const be = {
    encode(e, u = o.Writer.create()) {
        return e.time !== 0 && u.uint32(8)
            .int64(e.time), e.from_client === !0 && u.uint32(16)
            .bool(e.from_client), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Br();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.time = z(r.int64());
                    break;
                case 2:
                    i.from_client = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            time: a(e.time) ? Number(e.time) : 0,
            from_client: a(e.from_client) ? Boolean(e.from_client) : !1
        }
    },
    toJSON(e) {
        const u = {};
        return e.time !== void 0 && (u.time = Math.round(e.time)), e.from_client !== void 0 && (u.from_client = e.from_client), u
    },
    fromPartial(e) {
        var r, n;
        const u = Br();
        return u.time = (r = e.time) != null ? r : 0, u.from_client = (n = e.from_client) != null ? n : !1, u
    }
};

function Sr() {
    return {
        asymmetric_value: new Uint8Array,
        symmetric_value: new Uint8Array
    }
}
const k = {
    encode(e, u = o.Writer.create()) {
        return e.asymmetric_value.length !== 0 && u.uint32(10)
            .bytes(e.asymmetric_value), e.symmetric_value.length !== 0 && u.uint32(18)
            .bytes(e.symmetric_value), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Sr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.asymmetric_value = r.bytes();
                    break;
                case 2:
                    i.symmetric_value = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            asymmetric_value: a(e.asymmetric_value) ? h(e.asymmetric_value) : new Uint8Array,
            symmetric_value: a(e.symmetric_value) ? h(e.symmetric_value) : new Uint8Array
        }
    },
    toJSON(e) {
        const u = {};
        return e.asymmetric_value !== void 0 && (u.asymmetric_value = m(e.asymmetric_value !== void 0 ? e.asymmetric_value : new Uint8Array)), e.symmetric_value !== void 0 && (u.symmetric_value = m(e.symmetric_value !== void 0 ? e.symmetric_value : new Uint8Array)), u
    },
    fromPartial(e) {
        var r, n;
        const u = Sr();
        return u.asymmetric_value = (r = e.asymmetric_value) != null ? r : new Uint8Array, u.symmetric_value = (n = e.symmetric_value) != null ? n : new Uint8Array, u
    }
};

function wr() {
    return {
        id: new Uint8Array
    }
}
const Oe = {
    encode(e, u = o.Writer.create()) {
        return e.id.length !== 0 && u.uint32(10)
            .bytes(e.id), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = wr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.id = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            id: a(e.id) ? h(e.id) : new Uint8Array
        }
    },
    toJSON(e) {
        const u = {};
        return e.id !== void 0 && (u.id = m(e.id !== void 0 ? e.id : new Uint8Array)), u
    },
    fromPartial(e) {
        var r;
        const u = wr();
        return u.id = (r = e.id) != null ? r : new Uint8Array, u
    }
};

function gr() {
    return {
        sample_rate: 0,
        channels: 0
    }
}
const Ie = {
    encode(e, u = o.Writer.create()) {
        return e.sample_rate !== 0 && u.uint32(8)
            .uint32(e.sample_rate), e.channels !== 0 && u.uint32(16)
            .uint32(e.channels), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = gr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.sample_rate = r.uint32();
                    break;
                case 2:
                    i.channels = r.uint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            sample_rate: a(e.sample_rate) ? Number(e.sample_rate) : 0,
            channels: a(e.channels) ? Number(e.channels) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.sample_rate !== void 0 && (u.sample_rate = Math.round(e.sample_rate)), e.channels !== void 0 && (u.channels = Math.round(e.channels)), u
    },
    fromPartial(e) {
        var r, n;
        const u = gr();
        return u.sample_rate = (r = e.sample_rate) != null ? r : 0, u.channels = (n = e.channels) != null ? n : 0, u
    }
};

function Nr() {
    return {
        data: new Uint8Array
    }
}
const Te = {
    encode(e, u = o.Writer.create()) {
        return e.data.length !== 0 && u.uint32(10)
            .bytes(e.data), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Nr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.data = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            data: a(e.data) ? h(e.data) : new Uint8Array
        }
    },
    toJSON(e) {
        const u = {};
        return e.data !== void 0 && (u.data = m(e.data !== void 0 ? e.data : new Uint8Array)), u
    },
    fromPartial(e) {
        var r;
        const u = Nr();
        return u.data = (r = e.data) != null ? r : new Uint8Array, u
    }
};

function xr() {
    return {
        chat_message: void 0,
        switch_display: void 0,
        permission_info: void 0,
        option: void 0,
        audio_format: void 0,
        close_reason: void 0,
        refresh_video: void 0,
        option_response: void 0,
        video_received: void 0
    }
}
const B = {
    encode(e, u = o.Writer.create()) {
        return e.chat_message !== void 0 && ue.encode(e.chat_message, u.uint32(34)
                .fork())
            .ldelim(), e.switch_display !== void 0 && q.encode(e.switch_display, u.uint32(42)
                .fork())
            .ldelim(), e.permission_info !== void 0 && Re.encode(e.permission_info, u.uint32(50)
                .fork())
            .ldelim(), e.option !== void 0 && f.encode(e.option, u.uint32(58)
                .fork())
            .ldelim(), e.audio_format !== void 0 && Ie.encode(e.audio_format, u.uint32(66)
                .fork())
            .ldelim(), e.close_reason !== void 0 && u.uint32(74)
            .string(e.close_reason), e.refresh_video !== void 0 && u.uint32(80)
            .bool(e.refresh_video), e.option_response !== void 0 && Pe.encode(e.option_response, u.uint32(90)
                .fork())
            .ldelim(), e.video_received !== void 0 && u.uint32(96)
            .bool(e.video_received), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = xr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 4:
                    i.chat_message = ue.decode(r, r.uint32());
                    break;
                case 5:
                    i.switch_display = q.decode(r, r.uint32());
                    break;
                case 6:
                    i.permission_info = Re.decode(r, r.uint32());
                    break;
                case 7:
                    i.option = f.decode(r, r.uint32());
                    break;
                case 8:
                    i.audio_format = Ie.decode(r, r.uint32());
                    break;
                case 9:
                    i.close_reason = r.string();
                    break;
                case 10:
                    i.refresh_video = r.bool();
                    break;
                case 11:
                    i.option_response = Pe.decode(r, r.uint32());
                    break;
                case 12:
                    i.video_received = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            chat_message: a(e.chat_message) ? ue.fromJSON(e.chat_message) : void 0,
            switch_display: a(e.switch_display) ? q.fromJSON(e.switch_display) : void 0,
            permission_info: a(e.permission_info) ? Re.fromJSON(e.permission_info) : void 0,
            option: a(e.option) ? f.fromJSON(e.option) : void 0,
            audio_format: a(e.audio_format) ? Ie.fromJSON(e.audio_format) : void 0,
            close_reason: a(e.close_reason) ? String(e.close_reason) : void 0,
            refresh_video: a(e.refresh_video) ? Boolean(e.refresh_video) : void 0,
            option_response: a(e.option_response) ? Pe.fromJSON(e.option_response) : void 0,
            video_received: a(e.video_received) ? Boolean(e.video_received) : void 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.chat_message !== void 0 && (u.chat_message = e.chat_message ? ue.toJSON(e.chat_message) : void 0), e.switch_display !== void 0 && (u.switch_display = e.switch_display ? q.toJSON(e.switch_display) : void 0), e.permission_info !== void 0 && (u.permission_info = e.permission_info ? Re.toJSON(e.permission_info) : void 0), e.option !== void 0 && (u.option = e.option ? f.toJSON(e.option) : void 0), e.audio_format !== void 0 && (u.audio_format = e.audio_format ? Ie.toJSON(e.audio_format) : void 0), e.close_reason !== void 0 && (u.close_reason = e.close_reason), e.refresh_video !== void 0 && (u.refresh_video = e.refresh_video), e.option_response !== void 0 && (u.option_response = e.option_response ? Pe.toJSON(e.option_response) : void 0), e.video_received !== void 0 && (u.video_received = e.video_received), u
    },
    fromPartial(e) {
        var r, n, i;
        const u = xr();
        return u.chat_message = e.chat_message !== void 0 && e.chat_message !== null ? ue.fromPartial(e.chat_message) : void 0, u.switch_display = e.switch_display !== void 0 && e.switch_display !== null ? q.fromPartial(e.switch_display) : void 0, u.permission_info = e.permission_info !== void 0 && e.permission_info !== null ? Re.fromPartial(e.permission_info) : void 0, u.option = e.option !== void 0 && e.option !== null ? f.fromPartial(e.option) : void 0, u.audio_format = e.audio_format !== void 0 && e.audio_format !== null ? Ie.fromPartial(e.audio_format) : void 0, u.close_reason = (r = e.close_reason) != null ? r : void 0, u.refresh_video = (n = e.refresh_video) != null ? n : void 0, u.option_response = e.option_response !== void 0 && e.option_response !== null ? Pe.fromPartial(e.option_response) : void 0, u.video_received = (i = e.video_received) != null ? i : void 0, u
    }
};

function Rr() {
    return {
        signed_id: void 0,
        public_key: void 0,
        test_delay: void 0,
        video_frame: void 0,
        login_request: void 0,
        login_response: void 0,
        hash: void 0,
        mouse_event: void 0,
        audio_frame: void 0,
        cursor_data: void 0,
        cursor_position: void 0,
        cursor_id: void 0,
        key_event: void 0,
        clipboard: void 0,
        file_action: void 0,
        file_response: void 0,
        misc: void 0,
        cliprdr: void 0
    }
}
const au = {
    encode(e, u = o.Writer.create()) {
        return e.signed_id !== void 0 && Oe.encode(e.signed_id, u.uint32(26)
                .fork())
            .ldelim(), e.public_key !== void 0 && k.encode(e.public_key, u.uint32(34)
                .fork())
            .ldelim(), e.test_delay !== void 0 && be.encode(e.test_delay, u.uint32(42)
                .fork())
            .ldelim(), e.video_frame !== void 0 && X.encode(e.video_frame, u.uint32(50)
                .fork())
            .ldelim(), e.login_request !== void 0 && T.encode(e.login_request, u.uint32(58)
                .fork())
            .ldelim(), e.login_response !== void 0 && ie.encode(e.login_response, u.uint32(66)
                .fork())
            .ldelim(), e.hash !== void 0 && oe.encode(e.hash, u.uint32(74)
                .fork())
            .ldelim(), e.mouse_event !== void 0 && M.encode(e.mouse_event, u.uint32(82)
                .fork())
            .ldelim(), e.audio_frame !== void 0 && Te.encode(e.audio_frame, u.uint32(90)
                .fork())
            .ldelim(), e.cursor_data !== void 0 && ne.encode(e.cursor_data, u.uint32(98)
                .fork())
            .ldelim(), e.cursor_position !== void 0 && te.encode(e.cursor_position, u.uint32(106)
                .fork())
            .ldelim(), e.cursor_id !== void 0 && u.uint32(112)
            .uint64(e.cursor_id), e.key_event !== void 0 && E.encode(e.key_event, u.uint32(122)
                .fork())
            .ldelim(), e.clipboard !== void 0 && ae.encode(e.clipboard, u.uint32(130)
                .fork())
            .ldelim(), e.file_action !== void 0 && ce.encode(e.file_action, u.uint32(138)
                .fork())
            .ldelim(), e.file_response !== void 0 && _e.encode(e.file_response, u.uint32(146)
                .fork())
            .ldelim(), e.misc !== void 0 && B.encode(e.misc, u.uint32(154)
                .fork())
            .ldelim(), e.cliprdr !== void 0 && xe.encode(e.cliprdr, u.uint32(162)
                .fork())
            .ldelim(), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Rr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 3:
                    i.signed_id = Oe.decode(r, r.uint32());
                    break;
                case 4:
                    i.public_key = k.decode(r, r.uint32());
                    break;
                case 5:
                    i.test_delay = be.decode(r, r.uint32());
                    break;
                case 6:
                    i.video_frame = X.decode(r, r.uint32());
                    break;
                case 7:
                    i.login_request = T.decode(r, r.uint32());
                    break;
                case 8:
                    i.login_response = ie.decode(r, r.uint32());
                    break;
                case 9:
                    i.hash = oe.decode(r, r.uint32());
                    break;
                case 10:
                    i.mouse_event = M.decode(r, r.uint32());
                    break;
                case 11:
                    i.audio_frame = Te.decode(r, r.uint32());
                    break;
                case 12:
                    i.cursor_data = ne.decode(r, r.uint32());
                    break;
                case 13:
                    i.cursor_position = te.decode(r, r.uint32());
                    break;
                case 14:
                    i.cursor_id = z(r.uint64());
                    break;
                case 15:
                    i.key_event = E.decode(r, r.uint32());
                    break;
                case 16:
                    i.clipboard = ae.decode(r, r.uint32());
                    break;
                case 17:
                    i.file_action = ce.decode(r, r.uint32());
                    break;
                case 18:
                    i.file_response = _e.decode(r, r.uint32());
                    break;
                case 19:
                    i.misc = B.decode(r, r.uint32());
                    break;
                case 20:
                    i.cliprdr = xe.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            signed_id: a(e.signed_id) ? Oe.fromJSON(e.signed_id) : void 0,
            public_key: a(e.public_key) ? k.fromJSON(e.public_key) : void 0,
            test_delay: a(e.test_delay) ? be.fromJSON(e.test_delay) : void 0,
            video_frame: a(e.video_frame) ? X.fromJSON(e.video_frame) : void 0,
            login_request: a(e.login_request) ? T.fromJSON(e.login_request) : void 0,
            login_response: a(e.login_response) ? ie.fromJSON(e.login_response) : void 0,
            hash: a(e.hash) ? oe.fromJSON(e.hash) : void 0,
            mouse_event: a(e.mouse_event) ? M.fromJSON(e.mouse_event) : void 0,
            audio_frame: a(e.audio_frame) ? Te.fromJSON(e.audio_frame) : void 0,
            cursor_data: a(e.cursor_data) ? ne.fromJSON(e.cursor_data) : void 0,
            cursor_position: a(e.cursor_position) ? te.fromJSON(e.cursor_position) : void 0,
            cursor_id: a(e.cursor_id) ? Number(e.cursor_id) : void 0,
            key_event: a(e.key_event) ? E.fromJSON(e.key_event) : void 0,
            clipboard: a(e.clipboard) ? ae.fromJSON(e.clipboard) : void 0,
            file_action: a(e.file_action) ? ce.fromJSON(e.file_action) : void 0,
            file_response: a(e.file_response) ? _e.fromJSON(e.file_response) : void 0,
            misc: a(e.misc) ? B.fromJSON(e.misc) : void 0,
            cliprdr: a(e.cliprdr) ? xe.fromJSON(e.cliprdr) : void 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.signed_id !== void 0 && (u.signed_id = e.signed_id ? Oe.toJSON(e.signed_id) : void 0), e.public_key !== void 0 && (u.public_key = e.public_key ? k.toJSON(e.public_key) : void 0), e.test_delay !== void 0 && (u.test_delay = e.test_delay ? be.toJSON(e.test_delay) : void 0), e.video_frame !== void 0 && (u.video_frame = e.video_frame ? X.toJSON(e.video_frame) : void 0), e.login_request !== void 0 && (u.login_request = e.login_request ? T.toJSON(e.login_request) : void 0), e.login_response !== void 0 && (u.login_response = e.login_response ? ie.toJSON(e.login_response) : void 0), e.hash !== void 0 && (u.hash = e.hash ? oe.toJSON(e.hash) : void 0), e.mouse_event !== void 0 && (u.mouse_event = e.mouse_event ? M.toJSON(e.mouse_event) : void 0), e.audio_frame !== void 0 && (u.audio_frame = e.audio_frame ? Te.toJSON(e.audio_frame) : void 0), e.cursor_data !== void 0 && (u.cursor_data = e.cursor_data ? ne.toJSON(e.cursor_data) : void 0), e.cursor_position !== void 0 && (u.cursor_position = e.cursor_position ? te.toJSON(e.cursor_position) : void 0), e.cursor_id !== void 0 && (u.cursor_id = Math.round(e.cursor_id)), e.key_event !== void 0 && (u.key_event = e.key_event ? E.toJSON(e.key_event) : void 0), e.clipboard !== void 0 && (u.clipboard = e.clipboard ? ae.toJSON(e.clipboard) : void 0), e.file_action !== void 0 && (u.file_action = e.file_action ? ce.toJSON(e.file_action) : void 0), e.file_response !== void 0 && (u.file_response = e.file_response ? _e.toJSON(e.file_response) : void 0), e.misc !== void 0 && (u.misc = e.misc ? B.toJSON(e.misc) : void 0), e.cliprdr !== void 0 && (u.cliprdr = e.cliprdr ? xe.toJSON(e.cliprdr) : void 0), u
    },
    fromPartial(e) {
        var r;
        const u = Rr();
        return u.signed_id = e.signed_id !== void 0 && e.signed_id !== null ? Oe.fromPartial(e.signed_id) : void 0, u.public_key = e.public_key !== void 0 && e.public_key !== null ? k.fromPartial(e.public_key) : void 0, u.test_delay = e.test_delay !== void 0 && e.test_delay !== null ? be.fromPartial(e.test_delay) : void 0, u.video_frame = e.video_frame !== void 0 && e.video_frame !== null ? X.fromPartial(e.video_frame) : void 0, u.login_request = e.login_request !== void 0 && e.login_request !== null ? T.fromPartial(e.login_request) : void 0, u.login_response = e.login_response !== void 0 && e.login_response !== null ? ie.fromPartial(e.login_response) : void 0, u.hash = e.hash !== void 0 && e.hash !== null ? oe.fromPartial(e.hash) : void 0, u.mouse_event = e.mouse_event !== void 0 && e.mouse_event !== null ? M.fromPartial(e.mouse_event) : void 0, u.audio_frame = e.audio_frame !== void 0 && e.audio_frame !== null ? Te.fromPartial(e.audio_frame) : void 0, u.cursor_data = e.cursor_data !== void 0 && e.cursor_data !== null ? ne.fromPartial(e.cursor_data) : void 0, u.cursor_position = e.cursor_position !== void 0 && e.cursor_position !== null ? te.fromPartial(e.cursor_position) : void 0, u.cursor_id = (r = e.cursor_id) != null ? r : void 0, u.key_event = e.key_event !== void 0 && e.key_event !== null ? E.fromPartial(e.key_event) : void 0, u.clipboard = e.clipboard !== void 0 && e.clipboard !== null ? ae.fromPartial(e.clipboard) : void 0, u.file_action = e.file_action !== void 0 && e.file_action !== null ? ce.fromPartial(e.file_action) : void 0, u.file_response = e.file_response !== void 0 && e.file_response !== null ? _e.fromPartial(e.file_response) : void 0, u.misc = e.misc !== void 0 && e.misc !== null ? B.fromPartial(e.misc) : void 0, u.cliprdr = e.cliprdr !== void 0 && e.cliprdr !== null ? xe.fromPartial(e.cliprdr) : void 0, u
    }
};
var b = (() => {
    if (typeof b != "undefined") return b;
    if (typeof self != "undefined") return self;
    if (typeof window != "undefined") return window;
    if (typeof global != "undefined") return global;
    throw "Unable to locate global object"
})();
const gi = b.atob || (e => b.Buffer.from(e, "base64")
    .toString("binary"));

function h(e) {
    const u = gi(e),
        r = new Uint8Array(u.length);
    for (let n = 0; n < u.length; ++n) r[n] = u.charCodeAt(n);
    return r
}
const Ni = b.btoa || (e => b.Buffer.from(e, "binary")
    .toString("base64"));

function m(e) {
    const u = [];
    for (const r of e) u.push(String.fromCharCode(r));
    return Ni(u.join(""))
}

function z(e) {
    if (e.gt(Number.MAX_SAFE_INTEGER)) throw new b.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    return e.toNumber()
}
o.util.Long !== $e && (o.util.Long = $e, o.configure());

function a(e) {
    return e != null
}
var su;
(function(e) {
    e[e.DEFAULT_CONN = 0] = "DEFAULT_CONN", e[e.FILE_TRANSFER = 1] = "FILE_TRANSFER", e[e.PORT_FORWARD = 2] = "PORT_FORWARD", e[e.RDP = 3] = "RDP", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
})(su || (su = {}));

function Pr(e) {
    switch (e) {
        case 0:
        case "DEFAULT_CONN":
            return 0;
        case 1:
        case "FILE_TRANSFER":
            return 1;
        case 2:
        case "PORT_FORWARD":
            return 2;
        case 3:
        case "RDP":
            return 3;
        case -1:
        case "UNRECOGNIZED":
        default:
            return -1
    }
}

function br(e) {
    switch (e) {
        case 0:
            return "DEFAULT_CONN";
        case 1:
            return "FILE_TRANSFER";
        case 2:
            return "PORT_FORWARD";
        case 3:
            return "RDP";
        default:
            return "UNKNOWN"
    }
}
var du;
(function(e) {
    e[e.UNKNOWN_NAT = 0] = "UNKNOWN_NAT", e[e.ASYMMETRIC = 1] = "ASYMMETRIC", e[e.SYMMETRIC = 2] = "SYMMETRIC", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
})(du || (du = {}));

function eu(e) {
    switch (e) {
        case 0:
        case "UNKNOWN_NAT":
            return 0;
        case 1:
        case "ASYMMETRIC":
            return 1;
        case 2:
        case "SYMMETRIC":
            return 2;
        case -1:
        case "UNRECOGNIZED":
        default:
            return -1
    }
}

function uu(e) {
    switch (e) {
        case 0:
            return "UNKNOWN_NAT";
        case 1:
            return "ASYMMETRIC";
        case 2:
            return "SYMMETRIC";
        default:
            return "UNKNOWN"
    }
}
var Or;
(function(e) {
    e[e.OK = 0] = "OK", e[e.UUID_MISMATCH = 2] = "UUID_MISMATCH", e[e.ID_EXISTS = 3] = "ID_EXISTS", e[e.TOO_FREQUENT = 4] = "TOO_FREQUENT", e[e.INVALID_ID_FORMAT = 5] = "INVALID_ID_FORMAT", e[e.NOT_SUPPORT = 6] = "NOT_SUPPORT", e[e.SERVER_ERROR = 7] = "SERVER_ERROR", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
})(Or || (Or = {}));

function xi(e) {
    switch (e) {
        case 0:
        case "OK":
            return 0;
        case 2:
        case "UUID_MISMATCH":
            return 2;
        case 3:
        case "ID_EXISTS":
            return 3;
        case 4:
        case "TOO_FREQUENT":
            return 4;
        case 5:
        case "INVALID_ID_FORMAT":
            return 5;
        case 6:
        case "NOT_SUPPORT":
            return 6;
        case 7:
        case "SERVER_ERROR":
            return 7;
        case -1:
        case "UNRECOGNIZED":
        default:
            return -1
    }
}

function Ri(e) {
    switch (e) {
        case 0:
            return "OK";
        case 2:
            return "UUID_MISMATCH";
        case 3:
            return "ID_EXISTS";
        case 4:
            return "TOO_FREQUENT";
        case 5:
            return "INVALID_ID_FORMAT";
        case 6:
            return "NOT_SUPPORT";
        case 7:
            return "SERVER_ERROR";
        default:
            return "UNKNOWN"
    }
}
var O;
(function(e) {
    e[e.ID_NOT_EXIST = 0] = "ID_NOT_EXIST", e[e.OFFLINE = 2] = "OFFLINE", e[e.LICENSE_MISMATCH = 3] = "LICENSE_MISMATCH", e[e.LICENSE_OVERUSE = 4] = "LICENSE_OVERUSE", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
})(O || (O = {}));

function Pi(e) {
    switch (e) {
        case 0:
        case "ID_NOT_EXIST":
            return 0;
        case 2:
        case "OFFLINE":
            return 2;
        case 3:
        case "LICENSE_MISMATCH":
            return 3;
        case 4:
        case "LICENSE_OVERUSE":
            return 4;
        case -1:
        case "UNRECOGNIZED":
        default:
            return -1
    }
}

function bi(e) {
    switch (e) {
        case 0:
            return "ID_NOT_EXIST";
        case 2:
            return "OFFLINE";
        case 3:
            return "LICENSE_MISMATCH";
        case 4:
            return "LICENSE_OVERUSE";
        default:
            return "UNKNOWN"
    }
}

function Ir() {
    return {
        id: "",
        serial: 0
    }
}
const Me = {
    encode(e, u = o.Writer.create()) {
        return e.id !== "" && u.uint32(10)
            .string(e.id), e.serial !== 0 && u.uint32(16)
            .int32(e.serial), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Ir();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.id = r.string();
                    break;
                case 2:
                    i.serial = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            id: d(e.id) ? String(e.id) : "",
            serial: d(e.serial) ? Number(e.serial) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.id !== void 0 && (u.id = e.id), e.serial !== void 0 && (u.serial = Math.round(e.serial)), u
    },
    fromPartial(e) {
        var r, n;
        const u = Ir();
        return u.id = (r = e.id) != null ? r : "", u.serial = (n = e.serial) != null ? n : 0, u
    }
};

function Tr() {
    return {
        request_pk: !1
    }
}
const qe = {
    encode(e, u = o.Writer.create()) {
        return e.request_pk === !0 && u.uint32(16)
            .bool(e.request_pk), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Tr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 2:
                    i.request_pk = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            request_pk: d(e.request_pk) ? Boolean(e.request_pk) : !1
        }
    },
    toJSON(e) {
        const u = {};
        return e.request_pk !== void 0 && (u.request_pk = e.request_pk), u
    },
    fromPartial(e) {
        var r;
        const u = Tr();
        return u.request_pk = (r = e.request_pk) != null ? r : !1, u
    }
};

function Mr() {
    return {
        id: "",
        nat_type: 0,
        licence_key: "",
        conn_type: 0,
        token: ""
    }
}
const J = {
    encode(e, u = o.Writer.create()) {
        return e.id !== "" && u.uint32(10)
            .string(e.id), e.nat_type !== 0 && u.uint32(16)
            .int32(e.nat_type), e.licence_key !== "" && u.uint32(26)
            .string(e.licence_key), e.conn_type !== 0 && u.uint32(32)
            .int32(e.conn_type), e.token !== "" && u.uint32(42)
            .string(e.token), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Mr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.id = r.string();
                    break;
                case 2:
                    i.nat_type = r.int32();
                    break;
                case 3:
                    i.licence_key = r.string();
                    break;
                case 4:
                    i.conn_type = r.int32();
                    break;
                case 5:
                    i.token = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            id: d(e.id) ? String(e.id) : "",
            nat_type: d(e.nat_type) ? eu(e.nat_type) : 0,
            licence_key: d(e.licence_key) ? String(e.licence_key) : "",
            conn_type: d(e.conn_type) ? Pr(e.conn_type) : 0,
            token: d(e.token) ? String(e.token) : ""
        }
    },
    toJSON(e) {
        const u = {};
        return e.id !== void 0 && (u.id = e.id), e.nat_type !== void 0 && (u.nat_type = uu(e.nat_type)), e.licence_key !== void 0 && (u.licence_key = e.licence_key), e.conn_type !== void 0 && (u.conn_type = br(e.conn_type)), e.token !== void 0 && (u.token = e.token), u
    },
    fromPartial(e) {
        var r, n, i, t, s;
        const u = Mr();
        return u.id = (r = e.id) != null ? r : "", u.nat_type = (n = e.nat_type) != null ? n : 0, u.licence_key = (i = e.licence_key) != null ? i : "", u.conn_type = (t = e.conn_type) != null ? t : 0, u.token = (s = e.token) != null ? s : "", u
    }
};

function qr() {
    return {
        socket_addr: new Uint8Array,
        relay_server: "",
        nat_type: 0
    }
}
const ze = {
    encode(e, u = o.Writer.create()) {
        return e.socket_addr.length !== 0 && u.uint32(10)
            .bytes(e.socket_addr), e.relay_server !== "" && u.uint32(18)
            .string(e.relay_server), e.nat_type !== 0 && u.uint32(24)
            .int32(e.nat_type), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = qr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.socket_addr = r.bytes();
                    break;
                case 2:
                    i.relay_server = r.string();
                    break;
                case 3:
                    i.nat_type = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            socket_addr: d(e.socket_addr) ? F(e.socket_addr) : new Uint8Array,
            relay_server: d(e.relay_server) ? String(e.relay_server) : "",
            nat_type: d(e.nat_type) ? eu(e.nat_type) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.socket_addr !== void 0 && (u.socket_addr = D(e.socket_addr !== void 0 ? e.socket_addr : new Uint8Array)), e.relay_server !== void 0 && (u.relay_server = e.relay_server), e.nat_type !== void 0 && (u.nat_type = uu(e.nat_type)), u
    },
    fromPartial(e) {
        var r, n, i;
        const u = qr();
        return u.socket_addr = (r = e.socket_addr) != null ? r : new Uint8Array, u.relay_server = (n = e.relay_server) != null ? n : "", u.nat_type = (i = e.nat_type) != null ? i : 0, u
    }
};

function zr() {
    return {
        serial: 0
    }
}
const Je = {
    encode(e, u = o.Writer.create()) {
        return e.serial !== 0 && u.uint32(8)
            .int32(e.serial), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = zr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.serial = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            serial: d(e.serial) ? Number(e.serial) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.serial !== void 0 && (u.serial = Math.round(e.serial)), u
    },
    fromPartial(e) {
        var r;
        const u = zr();
        return u.serial = (r = e.serial) != null ? r : 0, u
    }
};

function Jr() {
    return {
        port: 0,
        cu: void 0
    }
}
const Le = {
    encode(e, u = o.Writer.create()) {
        return e.port !== 0 && u.uint32(8)
            .int32(e.port), e.cu !== void 0 && S.encode(e.cu, u.uint32(18)
                .fork())
            .ldelim(), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Jr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.port = r.int32();
                    break;
                case 2:
                    i.cu = S.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            port: d(e.port) ? Number(e.port) : 0,
            cu: d(e.cu) ? S.fromJSON(e.cu) : void 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.port !== void 0 && (u.port = Math.round(e.port)), e.cu !== void 0 && (u.cu = e.cu ? S.toJSON(e.cu) : void 0), u
    },
    fromPartial(e) {
        var r;
        const u = Jr();
        return u.port = (r = e.port) != null ? r : 0, u.cu = e.cu !== void 0 && e.cu !== null ? S.fromPartial(e.cu) : void 0, u
    }
};

function Lr() {
    return {
        socket_addr: new Uint8Array,
        id: "",
        relay_server: "",
        nat_type: 0,
        version: ""
    }
}
const Ue = {
    encode(e, u = o.Writer.create()) {
        return e.socket_addr.length !== 0 && u.uint32(10)
            .bytes(e.socket_addr), e.id !== "" && u.uint32(18)
            .string(e.id), e.relay_server !== "" && u.uint32(26)
            .string(e.relay_server), e.nat_type !== 0 && u.uint32(32)
            .int32(e.nat_type), e.version !== "" && u.uint32(42)
            .string(e.version), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Lr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.socket_addr = r.bytes();
                    break;
                case 2:
                    i.id = r.string();
                    break;
                case 3:
                    i.relay_server = r.string();
                    break;
                case 4:
                    i.nat_type = r.int32();
                    break;
                case 5:
                    i.version = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            socket_addr: d(e.socket_addr) ? F(e.socket_addr) : new Uint8Array,
            id: d(e.id) ? String(e.id) : "",
            relay_server: d(e.relay_server) ? String(e.relay_server) : "",
            nat_type: d(e.nat_type) ? eu(e.nat_type) : 0,
            version: d(e.version) ? String(e.version) : ""
        }
    },
    toJSON(e) {
        const u = {};
        return e.socket_addr !== void 0 && (u.socket_addr = D(e.socket_addr !== void 0 ? e.socket_addr : new Uint8Array)), e.id !== void 0 && (u.id = e.id), e.relay_server !== void 0 && (u.relay_server = e.relay_server), e.nat_type !== void 0 && (u.nat_type = uu(e.nat_type)), e.version !== void 0 && (u.version = e.version), u
    },
    fromPartial(e) {
        var r, n, i, t, s;
        const u = Lr();
        return u.socket_addr = (r = e.socket_addr) != null ? r : new Uint8Array, u.id = (n = e.id) != null ? n : "", u.relay_server = (i = e.relay_server) != null ? i : "", u.nat_type = (t = e.nat_type) != null ? t : 0, u.version = (s = e.version) != null ? s : "", u
    }
};

function Ur() {
    return {
        id: "",
        uuid: new Uint8Array,
        pk: new Uint8Array,
        old_id: ""
    }
}
const Ve = {
    encode(e, u = o.Writer.create()) {
        return e.id !== "" && u.uint32(10)
            .string(e.id), e.uuid.length !== 0 && u.uint32(18)
            .bytes(e.uuid), e.pk.length !== 0 && u.uint32(26)
            .bytes(e.pk), e.old_id !== "" && u.uint32(34)
            .string(e.old_id), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Ur();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.id = r.string();
                    break;
                case 2:
                    i.uuid = r.bytes();
                    break;
                case 3:
                    i.pk = r.bytes();
                    break;
                case 4:
                    i.old_id = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            id: d(e.id) ? String(e.id) : "",
            uuid: d(e.uuid) ? F(e.uuid) : new Uint8Array,
            pk: d(e.pk) ? F(e.pk) : new Uint8Array,
            old_id: d(e.old_id) ? String(e.old_id) : ""
        }
    },
    toJSON(e) {
        const u = {};
        return e.id !== void 0 && (u.id = e.id), e.uuid !== void 0 && (u.uuid = D(e.uuid !== void 0 ? e.uuid : new Uint8Array)), e.pk !== void 0 && (u.pk = D(e.pk !== void 0 ? e.pk : new Uint8Array)), e.old_id !== void 0 && (u.old_id = e.old_id), u
    },
    fromPartial(e) {
        var r, n, i, t;
        const u = Ur();
        return u.id = (r = e.id) != null ? r : "", u.uuid = (n = e.uuid) != null ? n : new Uint8Array, u.pk = (i = e.pk) != null ? i : new Uint8Array, u.old_id = (t = e.old_id) != null ? t : "", u
    }
};

function Vr() {
    return {
        result: 0
    }
}
const We = {
    encode(e, u = o.Writer.create()) {
        return e.result !== 0 && u.uint32(8)
            .int32(e.result), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Vr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.result = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            result: d(e.result) ? xi(e.result) : 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.result !== void 0 && (u.result = Ri(e.result)), u
    },
    fromPartial(e) {
        var r;
        const u = Vr();
        return u.result = (r = e.result) != null ? r : 0, u
    }
};

function Wr() {
    return {
        socket_addr: new Uint8Array,
        pk: new Uint8Array,
        failure: 0,
        relay_server: "",
        nat_type: void 0,
        is_local: void 0,
        other_failure: ""
    }
}
const He = {
    encode(e, u = o.Writer.create()) {
        return e.socket_addr.length !== 0 && u.uint32(10)
            .bytes(e.socket_addr), e.pk.length !== 0 && u.uint32(18)
            .bytes(e.pk), e.failure !== 0 && u.uint32(24)
            .int32(e.failure), e.relay_server !== "" && u.uint32(34)
            .string(e.relay_server), e.nat_type !== void 0 && u.uint32(40)
            .int32(e.nat_type), e.is_local !== void 0 && u.uint32(48)
            .bool(e.is_local), e.other_failure !== "" && u.uint32(58)
            .string(e.other_failure), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Wr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.socket_addr = r.bytes();
                    break;
                case 2:
                    i.pk = r.bytes();
                    break;
                case 3:
                    i.failure = r.int32();
                    break;
                case 4:
                    i.relay_server = r.string();
                    break;
                case 5:
                    i.nat_type = r.int32();
                    break;
                case 6:
                    i.is_local = r.bool();
                    break;
                case 7:
                    i.other_failure = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            socket_addr: d(e.socket_addr) ? F(e.socket_addr) : new Uint8Array,
            pk: d(e.pk) ? F(e.pk) : new Uint8Array,
            failure: d(e.failure) ? Pi(e.failure) : 0,
            relay_server: d(e.relay_server) ? String(e.relay_server) : "",
            nat_type: d(e.nat_type) ? eu(e.nat_type) : void 0,
            is_local: d(e.is_local) ? Boolean(e.is_local) : void 0,
            other_failure: d(e.other_failure) ? String(e.other_failure) : ""
        }
    },
    toJSON(e) {
        const u = {};
        return e.socket_addr !== void 0 && (u.socket_addr = D(e.socket_addr !== void 0 ? e.socket_addr : new Uint8Array)), e.pk !== void 0 && (u.pk = D(e.pk !== void 0 ? e.pk : new Uint8Array)), e.failure !== void 0 && (u.failure = bi(e.failure)), e.relay_server !== void 0 && (u.relay_server = e.relay_server), e.nat_type !== void 0 && (u.nat_type = e.nat_type !== void 0 ? uu(e.nat_type) : void 0), e.is_local !== void 0 && (u.is_local = e.is_local), e.other_failure !== void 0 && (u.other_failure = e.other_failure), u
    },
    fromPartial(e) {
        var r, n, i, t, s, l, c;
        const u = Wr();
        return u.socket_addr = (r = e.socket_addr) != null ? r : new Uint8Array, u.pk = (n = e.pk) != null ? n : new Uint8Array, u.failure = (i = e.failure) != null ? i : 0, u.relay_server = (t = e.relay_server) != null ? t : "", u.nat_type = (s = e.nat_type) != null ? s : void 0, u.is_local = (l = e.is_local) != null ? l : void 0, u.other_failure = (c = e.other_failure) != null ? c : "", u
    }
};

function Hr() {
    return {
        serial: 0,
        rendezvous_servers: []
    }
}
const S = {
    encode(e, u = o.Writer.create()) {
        e.serial !== 0 && u.uint32(8)
            .int32(e.serial);
        for (const r of e.rendezvous_servers) u.uint32(18)
            .string(r);
        return u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Hr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.serial = r.int32();
                    break;
                case 2:
                    i.rendezvous_servers.push(r.string());
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            serial: d(e.serial) ? Number(e.serial) : 0,
            rendezvous_servers: Array.isArray(e == null ? void 0 : e.rendezvous_servers) ? e.rendezvous_servers.map(u => String(u)) : []
        }
    },
    toJSON(e) {
        const u = {};
        return e.serial !== void 0 && (u.serial = Math.round(e.serial)), e.rendezvous_servers ? u.rendezvous_servers = e.rendezvous_servers.map(r => r) : u.rendezvous_servers = [], u
    },
    fromPartial(e) {
        var r, n;
        const u = Hr();
        return u.serial = (r = e.serial) != null ? r : 0, u.rendezvous_servers = ((n = e.rendezvous_servers) == null ? void 0 : n.map(i => i)) || [], u
    }
};

function Zr() {
    return {
        id: "",
        uuid: "",
        socket_addr: new Uint8Array,
        relay_server: "",
        secure: !1,
        licence_key: "",
        conn_type: 0,
        token: ""
    }
}
const L = {
    encode(e, u = o.Writer.create()) {
        return e.id !== "" && u.uint32(10)
            .string(e.id), e.uuid !== "" && u.uint32(18)
            .string(e.uuid), e.socket_addr.length !== 0 && u.uint32(26)
            .bytes(e.socket_addr), e.relay_server !== "" && u.uint32(34)
            .string(e.relay_server), e.secure === !0 && u.uint32(40)
            .bool(e.secure), e.licence_key !== "" && u.uint32(50)
            .string(e.licence_key), e.conn_type !== 0 && u.uint32(56)
            .int32(e.conn_type), e.token !== "" && u.uint32(66)
            .string(e.token), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Zr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.id = r.string();
                    break;
                case 2:
                    i.uuid = r.string();
                    break;
                case 3:
                    i.socket_addr = r.bytes();
                    break;
                case 4:
                    i.relay_server = r.string();
                    break;
                case 5:
                    i.secure = r.bool();
                    break;
                case 6:
                    i.licence_key = r.string();
                    break;
                case 7:
                    i.conn_type = r.int32();
                    break;
                case 8:
                    i.token = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            id: d(e.id) ? String(e.id) : "",
            uuid: d(e.uuid) ? String(e.uuid) : "",
            socket_addr: d(e.socket_addr) ? F(e.socket_addr) : new Uint8Array,
            relay_server: d(e.relay_server) ? String(e.relay_server) : "",
            secure: d(e.secure) ? Boolean(e.secure) : !1,
            licence_key: d(e.licence_key) ? String(e.licence_key) : "",
            conn_type: d(e.conn_type) ? Pr(e.conn_type) : 0,
            token: d(e.token) ? String(e.token) : ""
        }
    },
    toJSON(e) {
        const u = {};
        return e.id !== void 0 && (u.id = e.id), e.uuid !== void 0 && (u.uuid = e.uuid), e.socket_addr !== void 0 && (u.socket_addr = D(e.socket_addr !== void 0 ? e.socket_addr : new Uint8Array)), e.relay_server !== void 0 && (u.relay_server = e.relay_server), e.secure !== void 0 && (u.secure = e.secure), e.licence_key !== void 0 && (u.licence_key = e.licence_key), e.conn_type !== void 0 && (u.conn_type = br(e.conn_type)), e.token !== void 0 && (u.token = e.token), u
    },
    fromPartial(e) {
        var r, n, i, t, s, l, c, p;
        const u = Zr();
        return u.id = (r = e.id) != null ? r : "", u.uuid = (n = e.uuid) != null ? n : "", u.socket_addr = (i = e.socket_addr) != null ? i : new Uint8Array, u.relay_server = (t = e.relay_server) != null ? t : "", u.secure = (s = e.secure) != null ? s : !1, u.licence_key = (l = e.licence_key) != null ? l : "", u.conn_type = (c = e.conn_type) != null ? c : 0, u.token = (p = e.token) != null ? p : "", u
    }
};

function Gr() {
    return {
        socket_addr: new Uint8Array,
        uuid: "",
        relay_server: "",
        id: void 0,
        pk: void 0,
        refuse_reason: "",
        version: ""
    }
}
const Ze = {
    encode(e, u = o.Writer.create()) {
        return e.socket_addr.length !== 0 && u.uint32(10)
            .bytes(e.socket_addr), e.uuid !== "" && u.uint32(18)
            .string(e.uuid), e.relay_server !== "" && u.uint32(26)
            .string(e.relay_server), e.id !== void 0 && u.uint32(34)
            .string(e.id), e.pk !== void 0 && u.uint32(42)
            .bytes(e.pk), e.refuse_reason !== "" && u.uint32(50)
            .string(e.refuse_reason), e.version !== "" && u.uint32(58)
            .string(e.version), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Gr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.socket_addr = r.bytes();
                    break;
                case 2:
                    i.uuid = r.string();
                    break;
                case 3:
                    i.relay_server = r.string();
                    break;
                case 4:
                    i.id = r.string();
                    break;
                case 5:
                    i.pk = r.bytes();
                    break;
                case 6:
                    i.refuse_reason = r.string();
                    break;
                case 7:
                    i.version = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            socket_addr: d(e.socket_addr) ? F(e.socket_addr) : new Uint8Array,
            uuid: d(e.uuid) ? String(e.uuid) : "",
            relay_server: d(e.relay_server) ? String(e.relay_server) : "",
            id: d(e.id) ? String(e.id) : void 0,
            pk: d(e.pk) ? F(e.pk) : void 0,
            refuse_reason: d(e.refuse_reason) ? String(e.refuse_reason) : "",
            version: d(e.version) ? String(e.version) : ""
        }
    },
    toJSON(e) {
        const u = {};
        return e.socket_addr !== void 0 && (u.socket_addr = D(e.socket_addr !== void 0 ? e.socket_addr : new Uint8Array)), e.uuid !== void 0 && (u.uuid = e.uuid), e.relay_server !== void 0 && (u.relay_server = e.relay_server), e.id !== void 0 && (u.id = e.id), e.pk !== void 0 && (u.pk = e.pk !== void 0 ? D(e.pk) : void 0), e.refuse_reason !== void 0 && (u.refuse_reason = e.refuse_reason), e.version !== void 0 && (u.version = e.version), u
    },
    fromPartial(e) {
        var r, n, i, t, s, l, c;
        const u = Gr();
        return u.socket_addr = (r = e.socket_addr) != null ? r : new Uint8Array, u.uuid = (n = e.uuid) != null ? n : "", u.relay_server = (i = e.relay_server) != null ? i : "", u.id = (t = e.id) != null ? t : void 0, u.pk = (s = e.pk) != null ? s : void 0, u.refuse_reason = (l = e.refuse_reason) != null ? l : "", u.version = (c = e.version) != null ? c : "", u
    }
};

function Kr() {
    return {
        url: ""
    }
}
const Ge = {
    encode(e, u = o.Writer.create()) {
        return e.url !== "" && u.uint32(10)
            .string(e.url), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Kr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.url = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            url: d(e.url) ? String(e.url) : ""
        }
    },
    toJSON(e) {
        const u = {};
        return e.url !== void 0 && (u.url = e.url), u
    },
    fromPartial(e) {
        var r;
        const u = Kr();
        return u.url = (r = e.url) != null ? r : "", u
    }
};

function Yr() {
    return {
        socket_addr: new Uint8Array,
        relay_server: ""
    }
}
const Ke = {
    encode(e, u = o.Writer.create()) {
        return e.socket_addr.length !== 0 && u.uint32(10)
            .bytes(e.socket_addr), e.relay_server !== "" && u.uint32(18)
            .string(e.relay_server), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Yr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.socket_addr = r.bytes();
                    break;
                case 2:
                    i.relay_server = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            socket_addr: d(e.socket_addr) ? F(e.socket_addr) : new Uint8Array,
            relay_server: d(e.relay_server) ? String(e.relay_server) : ""
        }
    },
    toJSON(e) {
        const u = {};
        return e.socket_addr !== void 0 && (u.socket_addr = D(e.socket_addr !== void 0 ? e.socket_addr : new Uint8Array)), e.relay_server !== void 0 && (u.relay_server = e.relay_server), u
    },
    fromPartial(e) {
        var r, n;
        const u = Yr();
        return u.socket_addr = (r = e.socket_addr) != null ? r : new Uint8Array, u.relay_server = (n = e.relay_server) != null ? n : "", u
    }
};

function Qr() {
    return {
        socket_addr: new Uint8Array,
        local_addr: new Uint8Array,
        relay_server: "",
        id: "",
        version: ""
    }
}
const Ye = {
    encode(e, u = o.Writer.create()) {
        return e.socket_addr.length !== 0 && u.uint32(10)
            .bytes(e.socket_addr), e.local_addr.length !== 0 && u.uint32(18)
            .bytes(e.local_addr), e.relay_server !== "" && u.uint32(26)
            .string(e.relay_server), e.id !== "" && u.uint32(34)
            .string(e.id), e.version !== "" && u.uint32(42)
            .string(e.version), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Qr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.socket_addr = r.bytes();
                    break;
                case 2:
                    i.local_addr = r.bytes();
                    break;
                case 3:
                    i.relay_server = r.string();
                    break;
                case 4:
                    i.id = r.string();
                    break;
                case 5:
                    i.version = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            socket_addr: d(e.socket_addr) ? F(e.socket_addr) : new Uint8Array,
            local_addr: d(e.local_addr) ? F(e.local_addr) : new Uint8Array,
            relay_server: d(e.relay_server) ? String(e.relay_server) : "",
            id: d(e.id) ? String(e.id) : "",
            version: d(e.version) ? String(e.version) : ""
        }
    },
    toJSON(e) {
        const u = {};
        return e.socket_addr !== void 0 && (u.socket_addr = D(e.socket_addr !== void 0 ? e.socket_addr : new Uint8Array)), e.local_addr !== void 0 && (u.local_addr = D(e.local_addr !== void 0 ? e.local_addr : new Uint8Array)), e.relay_server !== void 0 && (u.relay_server = e.relay_server), e.id !== void 0 && (u.id = e.id), e.version !== void 0 && (u.version = e.version), u
    },
    fromPartial(e) {
        var r, n, i, t, s;
        const u = Qr();
        return u.socket_addr = (r = e.socket_addr) != null ? r : new Uint8Array, u.local_addr = (n = e.local_addr) != null ? n : new Uint8Array, u.relay_server = (i = e.relay_server) != null ? i : "", u.id = (t = e.id) != null ? t : "", u.version = (s = e.version) != null ? s : "", u
    }
};

function Xr() {
    return {
        cmd: "",
        mac: "",
        id: "",
        username: "",
        hostname: "",
        platform: "",
        misc: ""
    }
}
const Qe = {
    encode(e, u = o.Writer.create()) {
        return e.cmd !== "" && u.uint32(10)
            .string(e.cmd), e.mac !== "" && u.uint32(18)
            .string(e.mac), e.id !== "" && u.uint32(26)
            .string(e.id), e.username !== "" && u.uint32(34)
            .string(e.username), e.hostname !== "" && u.uint32(42)
            .string(e.hostname), e.platform !== "" && u.uint32(50)
            .string(e.platform), e.misc !== "" && u.uint32(58)
            .string(e.misc), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = Xr();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 1:
                    i.cmd = r.string();
                    break;
                case 2:
                    i.mac = r.string();
                    break;
                case 3:
                    i.id = r.string();
                    break;
                case 4:
                    i.username = r.string();
                    break;
                case 5:
                    i.hostname = r.string();
                    break;
                case 6:
                    i.platform = r.string();
                    break;
                case 7:
                    i.misc = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            cmd: d(e.cmd) ? String(e.cmd) : "",
            mac: d(e.mac) ? String(e.mac) : "",
            id: d(e.id) ? String(e.id) : "",
            username: d(e.username) ? String(e.username) : "",
            hostname: d(e.hostname) ? String(e.hostname) : "",
            platform: d(e.platform) ? String(e.platform) : "",
            misc: d(e.misc) ? String(e.misc) : ""
        }
    },
    toJSON(e) {
        const u = {};
        return e.cmd !== void 0 && (u.cmd = e.cmd), e.mac !== void 0 && (u.mac = e.mac), e.id !== void 0 && (u.id = e.id), e.username !== void 0 && (u.username = e.username), e.hostname !== void 0 && (u.hostname = e.hostname), e.platform !== void 0 && (u.platform = e.platform), e.misc !== void 0 && (u.misc = e.misc), u
    },
    fromPartial(e) {
        var r, n, i, t, s, l, c;
        const u = Xr();
        return u.cmd = (r = e.cmd) != null ? r : "", u.mac = (n = e.mac) != null ? n : "", u.id = (i = e.id) != null ? i : "", u.username = (t = e.username) != null ? t : "", u.hostname = (s = e.hostname) != null ? s : "", u.platform = (l = e.platform) != null ? l : "", u.misc = (c = e.misc) != null ? c : "", u
    }
};

function $r() {
    return {
        register_peer: void 0,
        register_peer_response: void 0,
        punch_hole_request: void 0,
        punch_hole: void 0,
        punch_hole_sent: void 0,
        punch_hole_response: void 0,
        fetch_local_addr: void 0,
        local_addr: void 0,
        configure_update: void 0,
        register_pk: void 0,
        register_pk_response: void 0,
        software_update: void 0,
        request_relay: void 0,
        relay_response: void 0,
        test_nat_request: void 0,
        test_nat_response: void 0,
        peer_discovery: void 0
    }
}
const lu = {
    encode(e, u = o.Writer.create()) {
        return e.register_peer !== void 0 && Me.encode(e.register_peer, u.uint32(50)
                .fork())
            .ldelim(), e.register_peer_response !== void 0 && qe.encode(e.register_peer_response, u.uint32(58)
                .fork())
            .ldelim(), e.punch_hole_request !== void 0 && J.encode(e.punch_hole_request, u.uint32(66)
                .fork())
            .ldelim(), e.punch_hole !== void 0 && ze.encode(e.punch_hole, u.uint32(74)
                .fork())
            .ldelim(), e.punch_hole_sent !== void 0 && Ue.encode(e.punch_hole_sent, u.uint32(82)
                .fork())
            .ldelim(), e.punch_hole_response !== void 0 && He.encode(e.punch_hole_response, u.uint32(90)
                .fork())
            .ldelim(), e.fetch_local_addr !== void 0 && Ke.encode(e.fetch_local_addr, u.uint32(98)
                .fork())
            .ldelim(), e.local_addr !== void 0 && Ye.encode(e.local_addr, u.uint32(106)
                .fork())
            .ldelim(), e.configure_update !== void 0 && S.encode(e.configure_update, u.uint32(114)
                .fork())
            .ldelim(), e.register_pk !== void 0 && Ve.encode(e.register_pk, u.uint32(122)
                .fork())
            .ldelim(), e.register_pk_response !== void 0 && We.encode(e.register_pk_response, u.uint32(130)
                .fork())
            .ldelim(), e.software_update !== void 0 && Ge.encode(e.software_update, u.uint32(138)
                .fork())
            .ldelim(), e.request_relay !== void 0 && L.encode(e.request_relay, u.uint32(146)
                .fork())
            .ldelim(), e.relay_response !== void 0 && Ze.encode(e.relay_response, u.uint32(154)
                .fork())
            .ldelim(), e.test_nat_request !== void 0 && Je.encode(e.test_nat_request, u.uint32(162)
                .fork())
            .ldelim(), e.test_nat_response !== void 0 && Le.encode(e.test_nat_response, u.uint32(170)
                .fork())
            .ldelim(), e.peer_discovery !== void 0 && Qe.encode(e.peer_discovery, u.uint32(178)
                .fork())
            .ldelim(), u
    },
    decode(e, u) {
        const r = e instanceof o.Reader ? e : new o.Reader(e);
        let n = u === void 0 ? r.len : r.pos + u;
        const i = $r();
        for (; r.pos < n;) {
            const t = r.uint32();
            switch (t >>> 3) {
                case 6:
                    i.register_peer = Me.decode(r, r.uint32());
                    break;
                case 7:
                    i.register_peer_response = qe.decode(r, r.uint32());
                    break;
                case 8:
                    i.punch_hole_request = J.decode(r, r.uint32());
                    break;
                case 9:
                    i.punch_hole = ze.decode(r, r.uint32());
                    break;
                case 10:
                    i.punch_hole_sent = Ue.decode(r, r.uint32());
                    break;
                case 11:
                    i.punch_hole_response = He.decode(r, r.uint32());
                    break;
                case 12:
                    i.fetch_local_addr = Ke.decode(r, r.uint32());
                    break;
                case 13:
                    i.local_addr = Ye.decode(r, r.uint32());
                    break;
                case 14:
                    i.configure_update = S.decode(r, r.uint32());
                    break;
                case 15:
                    i.register_pk = Ve.decode(r, r.uint32());
                    break;
                case 16:
                    i.register_pk_response = We.decode(r, r.uint32());
                    break;
                case 17:
                    i.software_update = Ge.decode(r, r.uint32());
                    break;
                case 18:
                    i.request_relay = L.decode(r, r.uint32());
                    break;
                case 19:
                    i.relay_response = Ze.decode(r, r.uint32());
                    break;
                case 20:
                    i.test_nat_request = Je.decode(r, r.uint32());
                    break;
                case 21:
                    i.test_nat_response = Le.decode(r, r.uint32());
                    break;
                case 22:
                    i.peer_discovery = Qe.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break
            }
        }
        return i
    },
    fromJSON(e) {
        return {
            register_peer: d(e.register_peer) ? Me.fromJSON(e.register_peer) : void 0,
            register_peer_response: d(e.register_peer_response) ? qe.fromJSON(e.register_peer_response) : void 0,
            punch_hole_request: d(e.punch_hole_request) ? J.fromJSON(e.punch_hole_request) : void 0,
            punch_hole: d(e.punch_hole) ? ze.fromJSON(e.punch_hole) : void 0,
            punch_hole_sent: d(e.punch_hole_sent) ? Ue.fromJSON(e.punch_hole_sent) : void 0,
            punch_hole_response: d(e.punch_hole_response) ? He.fromJSON(e.punch_hole_response) : void 0,
            fetch_local_addr: d(e.fetch_local_addr) ? Ke.fromJSON(e.fetch_local_addr) : void 0,
            local_addr: d(e.local_addr) ? Ye.fromJSON(e.local_addr) : void 0,
            configure_update: d(e.configure_update) ? S.fromJSON(e.configure_update) : void 0,
            register_pk: d(e.register_pk) ? Ve.fromJSON(e.register_pk) : void 0,
            register_pk_response: d(e.register_pk_response) ? We.fromJSON(e.register_pk_response) : void 0,
            software_update: d(e.software_update) ? Ge.fromJSON(e.software_update) : void 0,
            request_relay: d(e.request_relay) ? L.fromJSON(e.request_relay) : void 0,
            relay_response: d(e.relay_response) ? Ze.fromJSON(e.relay_response) : void 0,
            test_nat_request: d(e.test_nat_request) ? Je.fromJSON(e.test_nat_request) : void 0,
            test_nat_response: d(e.test_nat_response) ? Le.fromJSON(e.test_nat_response) : void 0,
            peer_discovery: d(e.peer_discovery) ? Qe.fromJSON(e.peer_discovery) : void 0
        }
    },
    toJSON(e) {
        const u = {};
        return e.register_peer !== void 0 && (u.register_peer = e.register_peer ? Me.toJSON(e.register_peer) : void 0), e.register_peer_response !== void 0 && (u.register_peer_response = e.register_peer_response ? qe.toJSON(e.register_peer_response) : void 0), e.punch_hole_request !== void 0 && (u.punch_hole_request = e.punch_hole_request ? J.toJSON(e.punch_hole_request) : void 0), e.punch_hole !== void 0 && (u.punch_hole = e.punch_hole ? ze.toJSON(e.punch_hole) : void 0), e.punch_hole_sent !== void 0 && (u.punch_hole_sent = e.punch_hole_sent ? Ue.toJSON(e.punch_hole_sent) : void 0), e.punch_hole_response !== void 0 && (u.punch_hole_response = e.punch_hole_response ? He.toJSON(e.punch_hole_response) : void 0), e.fetch_local_addr !== void 0 && (u.fetch_local_addr = e.fetch_local_addr ? Ke.toJSON(e.fetch_local_addr) : void 0), e.local_addr !== void 0 && (u.local_addr = e.local_addr ? Ye.toJSON(e.local_addr) : void 0), e.configure_update !== void 0 && (u.configure_update = e.configure_update ? S.toJSON(e.configure_update) : void 0), e.register_pk !== void 0 && (u.register_pk = e.register_pk ? Ve.toJSON(e.register_pk) : void 0), e.register_pk_response !== void 0 && (u.register_pk_response = e.register_pk_response ? We.toJSON(e.register_pk_response) : void 0), e.software_update !== void 0 && (u.software_update = e.software_update ? Ge.toJSON(e.software_update) : void 0), e.request_relay !== void 0 && (u.request_relay = e.request_relay ? L.toJSON(e.request_relay) : void 0), e.relay_response !== void 0 && (u.relay_response = e.relay_response ? Ze.toJSON(e.relay_response) : void 0), e.test_nat_request !== void 0 && (u.test_nat_request = e.test_nat_request ? Je.toJSON(e.test_nat_request) : void 0), e.test_nat_response !== void 0 && (u.test_nat_response = e.test_nat_response ? Le.toJSON(e.test_nat_response) : void 0), e.peer_discovery !== void 0 && (u.peer_discovery = e.peer_discovery ? Qe.toJSON(e.peer_discovery) : void 0), u
    },
    fromPartial(e) {
        const u = $r();
        return u.register_peer = e.register_peer !== void 0 && e.register_peer !== null ? Me.fromPartial(e.register_peer) : void 0, u.register_peer_response = e.register_peer_response !== void 0 && e.register_peer_response !== null ? qe.fromPartial(e.register_peer_response) : void 0, u.punch_hole_request = e.punch_hole_request !== void 0 && e.punch_hole_request !== null ? J.fromPartial(e.punch_hole_request) : void 0, u.punch_hole = e.punch_hole !== void 0 && e.punch_hole !== null ? ze.fromPartial(e.punch_hole) : void 0, u.punch_hole_sent = e.punch_hole_sent !== void 0 && e.punch_hole_sent !== null ? Ue.fromPartial(e.punch_hole_sent) : void 0, u.punch_hole_response = e.punch_hole_response !== void 0 && e.punch_hole_response !== null ? He.fromPartial(e.punch_hole_response) : void 0, u.fetch_local_addr = e.fetch_local_addr !== void 0 && e.fetch_local_addr !== null ? Ke.fromPartial(e.fetch_local_addr) : void 0, u.local_addr = e.local_addr !== void 0 && e.local_addr !== null ? Ye.fromPartial(e.local_addr) : void 0, u.configure_update = e.configure_update !== void 0 && e.configure_update !== null ? S.fromPartial(e.configure_update) : void 0, u.register_pk = e.register_pk !== void 0 && e.register_pk !== null ? Ve.fromPartial(e.register_pk) : void 0, u.register_pk_response = e.register_pk_response !== void 0 && e.register_pk_response !== null ? We.fromPartial(e.register_pk_response) : void 0, u.software_update = e.software_update !== void 0 && e.software_update !== null ? Ge.fromPartial(e.software_update) : void 0, u.request_relay = e.request_relay !== void 0 && e.request_relay !== null ? L.fromPartial(e.request_relay) : void 0, u.relay_response = e.relay_response !== void 0 && e.relay_response !== null ? Ze.fromPartial(e.relay_response) : void 0, u.test_nat_request = e.test_nat_request !== void 0 && e.test_nat_request !== null ? Je.fromPartial(e.test_nat_request) : void 0, u.test_nat_response = e.test_nat_response !== void 0 && e.test_nat_response !== null ? Le.fromPartial(e.test_nat_response) : void 0, u.peer_discovery = e.peer_discovery !== void 0 && e.peer_discovery !== null ? Qe.fromPartial(e.peer_discovery) : void 0, u
    }
};
var U = (() => {
    if (typeof U != "undefined") return U;
    if (typeof self != "undefined") return self;
    if (typeof window != "undefined") return window;
    if (typeof global != "undefined") return global;
    throw "Unable to locate global object"
})();
const Oi = U.atob || (e => U.Buffer.from(e, "base64")
    .toString("binary"));

function F(e) {
    const u = Oi(e),
        r = new Uint8Array(u.length);
    for (let n = 0; n < u.length; ++n) r[n] = u.charCodeAt(n);
    return r
}
const Ii = U.btoa || (e => U.Buffer.from(e, "binary")
    .toString("base64"));

function D(e) {
    const u = [];
    for (const r of e) u.push(String.fromCharCode(r));
    return Ii(u.join(""))
}
o.util.Long !== $e && (o.util.Long = $e, o.configure());

function d(e) {
    return e != null
}
class cu {
    constructor(u, r = !0) {
        _(this, "_websocket");
        _(this, "_eventHandlers");
        _(this, "_buf");
        _(this, "_status");
        _(this, "_latency");
        _(this, "_secretKey");
        _(this, "_uri");
        _(this, "_isRendezvous");
        this._eventHandlers = {
                message: n => {},
                open: () => {},
                close: () => {},
                error: () => {}
            }, this._uri = u, this._status = "", this._buf = [], this._websocket = new WebSocket(u), this._websocket.onmessage = this._recv_message.bind(this), this._websocket.binaryType = "arraybuffer", this._latency = new Date()
            .getTime(), this._isRendezvous = r
    }
    latency() {
        return this._latency
    }
    setSecretKey(u) {
        this._secretKey = [u, 0, 0]
    }
    sendMessage(u) {
        let r = au.encode(au.fromPartial(u))
            .finish(),
            n = this._secretKey;
        n && (n[1] += 1, r = nn(r, n[1], n[0])), this._websocket.send(r)
    }
    sendRendezvous(u) {
        this._websocket.send(lu.encode(lu.fromPartial(u))
            .finish())
    }
    parseMessage(u) {
        return au.decode(u)
    }
    parseRendezvous(u) {
        return lu.decode(u)
    }
    off(u) {
        this._eventHandlers[u] = () => {}
    }
    on(u, r) {
        this._eventHandlers[u] = r
    }
    async open(u = 12e3) {
        return new Promise((r, n) => {
            setTimeout(() => {
                this._status != "open" && n(this._status || "Timeout")
            }, u), this._websocket.onopen = () => {
                var i;
                this._latency = new Date()
                    .getTime() - this._latency, this._status = "open", console.debug(">> WebSock.onopen"), ((i = this._websocket) == null ? void 0 : i.protocol) && console.info("Server choose sub-protocol: " + this._websocket.protocol), this._eventHandlers.open(), console.info("WebSock.onopen"), r(this)
            }, this._websocket.onclose = i => {
                this._status == "open", this._status = i, console.error("WebSock.onclose: "), console.error(i), this._eventHandlers.close(i), n("Reset by the peer")
            }, this._websocket.onerror = i => {
                if (!this._status) {
                    n("Failed to connect to " + (this._isRendezvous ? "rendezvous" : "relay") + " server");
                    return
                }
                this._status = i, console.error("WebSock.onerror: "), console.error(i), this._eventHandlers.error(i)
            }
        })
    }
    async next(u = 12e3) {
        const r = (n, i, t) => {
            if (this._buf.length) n(this._buf[0]), this._buf.splice(0, 1);
            else {
                if (this._status != "open") {
                    i(this._status);
                    return
                }
                new Date()
                    .getTime() > t + u ? i("Timeout") : setTimeout(() => r(n, i, t), 1)
            }
        };
        return new Promise((n, i) => {
            r(n, i, new Date()
                .getTime())
        })
    }
    close() {
        this._status = "", this._websocket && ((this._websocket.readyState === WebSocket.OPEN || this._websocket.readyState === WebSocket.CONNECTING) && (console.info("Closing WebSocket connection"), this._websocket.close()), this._websocket.onmessage = () => {})
    }
    _recv_message(u) {
        if (u.data instanceof window.ArrayBuffer) {
            let r = new Uint8Array(u.data);
            const n = this._secretKey;
            n && (n[2] += 1, r = tn(r, n[2], n[0])), this._buf.push(this._isRendezvous ? this.parseRendezvous(r) : this.parseMessage(r))
        }
        this._eventHandlers.message(u.data)
    }
}
async function jr(e) {
    const u = await hi();
    console.log("isSIMD: " + u), window.OGVLoader.loadClass(u ? "OGVDecoderVideoVP9SIMDW" : "OGVDecoderVideoVP9W", r => {
        window.videoCodecClass = r, r({
                videoFormat: {}
            })
            .then(n => {
                n.init(() => {
                    e(n)
                })
            })
    }, {
        worker: !0,
        threading: !0
    })
}
const ei = {
    ru: {
        Status: "C\u0442\u0430\u0442\u0443\u0441",
        "Your Desktop": "\u0412\u0430\u0448 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B",
        desk_tip: "\u0412\u0430\u0448 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0441 \u044D\u0442\u0438\u043C \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440\u043E\u043C \u0438 \u043F\u0430\u0440\u043E\u043B\u0435\u043C",
        Password: "\u041F\u0430\u0440\u043E\u043B\u044C",
        Ready: "\u0413\u043E\u0442\u043E\u0432\u043E",
        Established: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E",
        connecting_status: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0441\u0435\u0442\u0438 RustDesk..",
        "Enable Service": "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u043B\u0443\u0436\u0431\u0443",
        "Start Service": "\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0441\u043B\u0443\u0436\u0431\u0443",
        "Service is running": "\u0421\u043B\u0443\u0436\u0431\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442",
        "Service is not running": "\u0421\u043B\u0443\u0436\u0431\u0430 \u043D\u0435 \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u0430",
        not_ready_status: "\u041D\u0435 \u0433\u043E\u0442\u043E\u0432\u043E. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435",
        "Control Remote Desktop": "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u043C \u0440\u0430\u0431\u043E\u0447\u0438\u043C \u0441\u0442\u043E\u043B\u043E\u043C",
        "Transfer File": "\u041F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u0444\u0430\u0439\u043B",
        Connect: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F",
        "Recent Sessions": "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0441\u0435\u0430\u043D\u0441\u044B",
        "Address Book": "\u0410\u0434\u0440\u0435\u0441\u043D\u0430\u044F \u043A\u043D\u0438\u0433\u0430",
        Confirmation: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435",
        "TCP Tunneling": "TCP-\u0442\u0443\u043D\u043D\u0435\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
        Remove: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
        "Refresh random password": "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
        "Set your own password": "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0432\u043E\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
        "Enable Keyboard/Mouse": "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0443/\u043C\u044B\u0448\u044C",
        "Enable Clipboard": "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430",
        "Enable File Transfer": "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0444\u0430\u0439\u043B\u043E\u0432",
        "Enable TCP Tunneling": "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0443\u043D\u043D\u0435\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 TCP",
        "IP Whitelisting": "\u0421\u043F\u0438\u0441\u043E\u043A \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043D\u044B\u0445 IP-\u0430\u0434\u0440\u0435\u0441\u043E\u0432",
        "ID/Relay Server": "ID/\u0421\u0435\u0440\u0432\u0435\u0440 \u0440\u0435\u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u0438",
        "Stop service": "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u043B\u0443\u0436\u0431\u0443",
        "Change ID": "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ID",
        Website: "\u0412\u0435\u0431-\u0441\u0430\u0439\u0442",
        About: "\u041E RustDesk",
        Mute: "\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u0432\u0443\u043A",
        "Audio Input": "\u0410\u0443\u0434\u0438\u043E\u0432\u0445\u043E\u0434",
        "ID Server": "ID \u0441\u0435\u0440\u0432\u0435\u0440",
        "Relay Server": "\u0421\u0435\u0440\u0432\u0435\u0440 \u0440\u0435\u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u0438",
        "API Server": "API \u0441\u0435\u0440\u0432\u0435\u0440",
        invalid_http: "\u0414\u043E\u043B\u0436\u0435\u043D \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 http:// \u0438\u043B\u0438 https://",
        "Invalid IP": "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 IP-\u0430\u0434\u0440\u0435\u0441",
        id_change_tip: "\u0414\u043E\u043F\u0443\u0441\u043A\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0438\u043C\u0432\u043E\u043B\u044B a-z, A-Z, 0-9 \u0438 _ (\u043F\u043E\u0434\u0447\u0435\u0440\u043A\u0438\u0432\u0430\u043D\u0438\u0435). \u041F\u0435\u0440\u0432\u0430\u044F \u0431\u0443\u043A\u0432\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C a-z, A-Z. \u0414\u043B\u0438\u043D\u0430 \u043E\u0442 6 \u0434\u043E 16",
        "Invalid format": "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442",
        "This function is turned off by the server": "\u042D\u0442\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u044F \u043D\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C",
        "Not available": "\u041D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E",
        "Too frequent": "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0447\u0430\u0441\u0442\u043E",
        Cancel: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
        Skip: "\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C",
        Close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        Retry: "\u041F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u0435\u0449\u0435 \u0440\u0430\u0437",
        OK: "\u041E\u041A",
        "Password Required": "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043F\u0430\u0440\u043E\u043B\u044C",
        "Please enter your password": "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C",
        "Remember password": "\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",
        "Wrong Password": "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
        "Do you want to enter again?": "\u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u043D\u043E\u0432\u0430 \u0432\u043E\u0439\u0442\u0438?",
        "Connection Error": "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",
        Error: "\u041E\u0448\u0438\u0431\u043A\u0430",
        "Reset by the peer": "\u0421\u0431\u0440\u043E\u0448\u0435\u043D\u043E \u0443\u0437\u043B\u043E\u043C",
        "Connecting...": "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435..",
        "Connection in progress. Please wait.": "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435. \u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435",
        "Please try 1 minute later": "\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 1 \u043C\u0438\u043D\u0443\u0442\u0443",
        "Login Error": "\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0445\u043E\u0434\u0430",
        Successful: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u0430",
        "Connected, waiting for image...": "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E, \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F..",
        Name: "\u0418\u043C\u044F",
        Type: "\u0422\u0438\u043F",
        Modified: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u043E",
        Size: "\u0420\u0430\u0437\u043C\u0435\u0440",
        "Show Hidden Files": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u043A\u0440\u044B\u0442\u044B\u0435 \u0444\u0430\u0439\u043B\u044B",
        Receive: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C",
        Send: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
        "Refresh File": "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0444\u0430\u0439\u043B",
        Local: "\u041C\u0435\u0441\u0442\u043D\u044B\u0439",
        Remote: "\u0423\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0439",
        "Remote Computer": "\u0423\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440",
        "Local Computer": "\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440",
        "Confirm Delete": "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435",
        Delete: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
        Properties: "\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430",
        "Multi Select": "\u041C\u043D\u043E\u0433\u043E\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440",
        "Empty Directory": "\u041F\u0443\u0441\u0442\u0430\u044F \u043F\u0430\u043F\u043A\u0430",
        "Not an empty directory": "\u041F\u0430\u043F\u043A\u0430 \u043D\u0435 \u043F\u0443\u0441\u0442\u0430",
        "Are you sure you want to delete this file?": "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u0442\u043E\u0442 \u0444\u0430\u0439\u043B?",
        "Are you sure you want to delete this empty directory?": "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0443\u0441\u0442\u0443\u044E \u043F\u0430\u043F\u043A\u0443?",
        "Are you sure you want to delete the file of this directory?": "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u0430\u0439\u043B \u0438\u0437 \u044D\u0442\u043E\u0439 \u043F\u0430\u043F\u043A\u0438?",
        "Do this for all conflicts": "\u042D\u0442\u043E \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u043A\u043E \u0432\u0441\u0435\u043C \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u0430\u043C",
        "This is irreversible!": "\u042D\u0442\u043E \u043D\u0435\u043E\u0431\u0440\u0430\u0442\u0438\u043C\u043E!",
        Deleting: "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435",
        files: "\u0444\u0430\u0439\u043B\u044B",
        Waiting: "\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435",
        Finished: "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E",
        Speed: "\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C",
        "Custom Image Quality": "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
        "Privacy mode": "\u0420\u0435\u0436\u0438\u043C \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
        "Block user input": "\u0411\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0432\u0432\u043E\u0434",
        "Unblock user input": "\u0420\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0432\u0432\u043E\u0434",
        "Adjust Window": "\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043E\u043A\u043D\u043E",
        Original: "\u041E\u0440\u0438\u0433\u0438\u043D\u0430\u043B",
        Shrink: "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C",
        Stretch: "\u0420\u0430\u0441\u0442\u044F\u043D\u0443\u0442\u044C",
        "Good image quality": "\u0425\u043E\u0440\u043E\u0448\u0435\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
        Balanced: "\u0421\u0431\u0430\u043B\u0430\u043D\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439",
        "Optimize reaction time": "\u041E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u0440\u0435\u043C\u044F \u0440\u0435\u0430\u043A\u0446\u0438\u0438",
        Custom: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439",
        "Show remote cursor": "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0439 \u043A\u0443\u0440\u0441\u043E\u0440",
        "Disable clipboard": "\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430",
        "Lock after session end": "\u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0443\u0447\u0451\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0441\u0435\u0430\u043D\u0441\u0430",
        Insert: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C",
        "Insert Lock": "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0437\u0430\u043C\u043E\u043A",
        Refresh: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",
        "ID does not exist": "ID \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442",
        "Failed to connect to rendezvous server": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u0447\u043D\u043E\u043C\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0443",
        "Please try later": "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435",
        "Remote desktop is offline": "\u0423\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0439 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B \u043D\u0435 \u043E\u043D\u043B\u0430\u0439\u043D",
        "Key mismatch": "\u041D\u0435\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u043A\u043B\u044E\u0447\u0435\u0439",
        Timeout: "\u0422\u0430\u0439\u043C-\u0430\u0443\u0442",
        "Failed to connect to relay server": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0440\u0435\u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u0438",
        "Failed to connect via rendezvous server": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u0447\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440",
        "Failed to connect via relay server": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0435\u0440 \u0440\u0435\u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u0438",
        "Failed to make direct connection to remote desktop": "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u044F\u043C\u043E\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u043C\u0443 \u0440\u0430\u0431\u043E\u0447\u0435\u043C\u0443 \u0441\u0442\u043E\u043B\u0443",
        "Set Password": "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",
        "OS Password": "\u041F\u0430\u0440\u043E\u043B\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B",
        install_tip: "\u0412 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445 \u0438\u0437-\u0437\u0430 UAC RustDesk \u043C\u043E\u0436\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E \u043D\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u043C \u0443\u0437\u043B\u0435. \u0427\u0442\u043E\u0431\u044B \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C UAC, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 \u043D\u0438\u0436\u0435, \u0447\u0442\u043E\u0431\u044B \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C RustDesk \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435",
        "Click to upgrade": "\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043D\u0430 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439",
        "Click to download": "\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0441\u043A\u0430\u0447\u0430\u0442\u044C",
        "Click to update": "\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C",
        "Configuration Permissions": "\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043D\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
        Configure: "\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C",
        config_acc: '\u0427\u0442\u043E\u0431\u044B \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0441\u0432\u043E\u0438\u043C \u0440\u0430\u0431\u043E\u0447\u0438\u043C \u0441\u0442\u043E\u043B\u043E\u043C, \u0432\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C RustDesk \u043F\u0440\u0430\u0432\u0430 "\u0434\u043E\u0441\u0442\u0443\u043F\u0430"',
        config_screen: '\u0414\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0440\u0430\u0431\u043E\u0447\u0435\u043C\u0443 \u0441\u0442\u043E\u043B\u0443 \u0432\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C RustDesk \u043F\u0440\u0430\u0432\u0430 "\u0441\u043D\u0438\u043C\u043E\u043A \u044D\u043A\u0440\u0430\u043D\u0430"',
        "Installing ...": "\u0423\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u044C\u0441\u044F...",
        Install: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C",
        Installation: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430",
        "Installation Path": "\u041F\u0430\u043F\u043A\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438",
        "Create start menu shortcuts": '\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u044F\u0440\u043B\u044B\u043A\u0438 \u043C\u0435\u043D\u044E "\u041F\u0443\u0441\u043A"',
        "Create desktop icon": "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u043D\u0430\u0447\u043E\u043A \u043D\u0430 \u0440\u0430\u0431\u043E\u0447\u0435\u043C \u0441\u0442\u043E\u043B\u0435",
        agreement_tip: "\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0430\u0447\u043D\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443, \u043F\u0440\u0438\u043C\u0438\u0442\u0435 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u043E\u043D\u043D\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435",
        "Accept and Install": "\u041F\u0440\u0438\u043D\u044F\u0442\u044C \u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C",
        "End-user license agreement": "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u043E\u043D\u043D\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u0441 \u043A\u043E\u043D\u0435\u0447\u043D\u044B\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C",
        "Generating ...": "\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F...",
        "Your installation is lower version.": "\u0412\u0430\u0448\u0430 \u0438\u043D\u0441\u0442\u0430\u043B\u044F\u0446\u0438\u044F \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0431\u043E\u043B\u0435\u0435 \u0440\u0430\u043D\u043D\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0435\u0439",
        not_close_tcp_tip: "\u041D\u0435 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u044D\u0442\u043E \u043E\u043A\u043D\u043E \u043F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0442\u0443\u043D\u043D\u0435\u043B\u044F",
        "Listening ...": "\u041E\u0436\u0438\u0434\u0430\u0435\u043C ...",
        "Remote Host": "\u0423\u0434\u0430\u043B\u0435\u043D\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",
        "Remote Port": "\u0423\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0439 \u043F\u043E\u0440\u0442",
        Action: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435",
        Add: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
        "Local Port": "\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0440\u0442",
        setup_server_tip: "\u0414\u043B\u044F \u0431\u043E\u043B\u0435\u0435 \u0431\u044B\u0441\u0442\u0440\u043E\u0433\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u0441\u0432\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",
        "Too short, at least 6 characters.": "\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043A\u043E\u0440\u043E\u0442\u043A\u043E, \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
        "The confirmation is not identical.": "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043D\u0435 \u0438\u0434\u0435\u043D\u0442\u0438\u0447\u043D\u043E",
        Permissions: "\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F",
        Accept: "\u041F\u0440\u0438\u043D\u044F\u0442\u044C",
        Dismiss: "\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C",
        Disconnect: "\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C",
        "Allow using keyboard and mouse": "\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044B \u0438 \u043C\u044B\u0448\u0438",
        "Allow using clipboard": "\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0431\u0443\u0444\u0435\u0440\u0430 \u043E\u0431\u043C\u0435\u043D\u0430",
        "Allow hearing sound": "\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0437\u0432\u0443\u043A\u0430",
        "Allow file transfer": "\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0444\u0430\u0439\u043B\u043E\u0432",
        "File transfer": "\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0444\u0430\u0439\u043B\u043E\u0432",
        Connected: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E",
        "Direct and encrypted connection": "\u041F\u0440\u044F\u043C\u043E\u0435 \u0438 \u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435",
        "Relayed and encrypted connection": "\u041A\u043E\u043C\u043C\u0443\u0442\u0438\u0440\u0443\u0435\u043C\u043E\u0435 \u0438 \u0437\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435",
        "Direct and unencrypted connection": "\u041F\u0440\u044F\u043C\u043E\u0435 \u0438 \u043D\u0435\u0437\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435",
        "Relayed and unencrypted connection": "\u041A\u043E\u043C\u043C\u0443\u0442\u0438\u0440\u0443\u0435\u043C\u043E\u0435 \u0438 \u043D\u0435\u0437\u0430\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435",
        "Enter Remote ID": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0439 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440",
        "Enter your password": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
        "Logging in...": "\u0412\u0445\u043E\u0434\u0438\u043C...",
        "Enable RDP session sharing": "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043E\u0431\u0449\u0438\u0439 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0441\u0435\u0430\u043D\u0441\u0443 RDP",
        "Auto Login": '\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0432\u0445\u043E\u0434 (\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u0435\u043D, \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0441\u043B\u0438 \u0432\u044B \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0438 "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0441\u0435\u0430\u043D\u0441\u0430 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0443\u0434\u0430\u043B\u0451\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F"',
        "Enable Direct IP Access": "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043F\u0440\u044F\u043C\u043E\u0439 IP-\u0434\u043E\u0441\u0442\u0443\u043F",
        Rename: "\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u0442\u044C",
        Space: "\u041C\u0435\u0441\u0442\u043E",
        "Create Desktop Shortcut": "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u044F\u0440\u043B\u044B\u043A \u043D\u0430 \u0440\u0430\u0431\u043E\u0447\u0435\u043C \u0441\u0442\u043E\u043B\u0435",
        "Change Path": "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0443\u0442\u044C",
        "Create Folder": "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0430\u043F\u043A\u0443",
        "Please enter the folder name": "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F \u043F\u0430\u043F\u043A\u0438",
        "Fix it": "\u041E\u0442\u0440\u0435\u043C\u043E\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
        Warning: "\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435",
        "Login screen using Wayland is not supported": "\u0412\u0445\u043E\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C Wayland \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F",
        "Reboot required": "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430",
        "Unsupported display server ": "\u041D\u0435\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u0438\u0441\u043F\u043B\u0435\u044F",
        "x11 expected": "\u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F X11",
        Port: "\u041F\u043E\u0440\u0442",
        Settings: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
        Username: "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",
        "Invalid port": "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u043E\u0440\u0442",
        "Closed manually by the peer": "\u0417\u0430\u043A\u0440\u044B\u0442\u043E \u0443\u0437\u043B\u043E\u043C \u0432\u0440\u0443\u0447\u043D\u0443\u044E",
        "Enable remote configuration modification": "\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",
        "Run without install": "\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0431\u0435\u0437 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438",
        "Always connected via relay": "\u0412\u0441\u0435\u0433\u0434\u0430 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D \u0447\u0435\u0440\u0435\u0437 \u0440\u0435\u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440",
        "Always connect via relay": "\u0412\u0441\u0435\u0433\u0434\u0430 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0442\u044C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0440\u0435\u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0441\u0435\u0440\u0432\u0435\u0440",
        whitelist_tip: "\u0422\u043E\u043B\u044C\u043A\u043E IP-\u0430\u0434\u0440\u0435\u0441\u0430 \u0438\u0437 \u0431\u0435\u043B\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430 \u043C\u043E\u0433\u0443\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A\u043E \u043C\u043D\u0435",
        Login: "\u0412\u043E\u0439\u0442\u0438",
        Logout: "\u0412\u044B\u0439\u0442\u0438",
        Tags: "\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430",
        "Search ID": "\u041F\u043E\u0438\u0441\u043A \u043F\u043E ID",
        "Current Wayland display server is not supported": "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F Wayland \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F",
        whitelist_sep: "\u0420\u0430\u0437\u0434\u0435\u043B\u044C\u043D\u043E \u0437\u0430\u043F\u044F\u0442\u043E\u0439, \u0442\u043E\u0447\u043A\u043E\u0439 \u0441 \u0437\u0430\u043F\u044F\u0442\u043E\u0439, \u043F\u0440\u043E\u0431\u0435\u043B\u043E\u043C \u0438\u043B\u0438 \u043D\u043E\u0432\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u043E\u0439",
        "Add ID": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ID",
        "Add Tag": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E",
        "Unselect all tags": "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0432\u044B\u0431\u043E\u0440 \u0432\u0441\u0435\u0445 \u0442\u0435\u0433\u043E\u0432",
        "Network error": "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0442\u0438",
        "Username missed": "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",
        "Password missed": "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C",
        "Wrong credentials": "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0443\u0447\u0435\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435",
        "Edit Tag": "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u0433",
        "Unremember Password": "\u041D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",
        Favorites: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435",
        "Add to Favorites": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435",
        "Remove from Favorites": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E",
        Empty: "\u041F\u0443\u0441\u0442\u043E",
        "Invalid folder name": "\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u043E\u0435 \u0438\u043C\u044F \u043F\u0430\u043F\u043A\u0438",
        "Socks5 Proxy": "\u041F\u0440\u043E\u043A\u0441\u0438-\u0441\u0435\u0440\u0432\u0435\u0440 Socks5",
        Hostname: "\u0418\u043C\u044F \u041F\u041A",
        Discovered: "\u041D\u0430\u0439\u0434\u0435\u043D\u043E",
        install_daemon_tip: "\u0414\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u0443\u044E \u0441\u043B\u0443\u0436\u0431\u0443",
        "Remote ID": "\u0423\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0439 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440",
        Paste: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C",
        "Paste here?": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u044E\u0434\u0430?",
        "Are you sure to close the connection?": "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435?",
        "Download new version": "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E",
        "Touch mode": "\u0421\u0435\u043D\u0441\u043E\u0440\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",
        "Mouse mode": "\u0420\u0435\u0436\u0438\u043C \u043C\u044B\u0448\u0438",
        "One-Finger Tap": "\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u043E\u0434\u043D\u0438\u043C \u043F\u0430\u043B\u044C\u0446\u0435\u043C",
        "Left Mouse": "\u041B\u0435\u0432\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \u043C\u044B\u0448\u0438",
        "One-Long Tap": "\u041E\u0434\u043D\u043E \u0434\u043E\u043B\u0433\u043E\u0435 \u043A\u0430\u0441\u0430\u043D\u0438\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C",
        "Two-Finger Tap": "\u041A\u0430\u0441\u0430\u043D\u0438\u0435 \u0434\u0432\u0443\u043C\u044F \u043F\u0430\u043B\u044C\u0446\u0430\u043C\u0438",
        "Right Mouse": "\u041F\u0440\u0430\u0432\u0430\u044F \u043C\u044B\u0448\u044C",
        "One-Finger Move": "\u0414\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u043E\u0434\u043D\u0438\u043C \u043F\u0430\u043B\u044C\u0446\u0435\u043C",
        "Double Tap & Move": "\u0414\u0432\u043E\u0439\u043D\u043E\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u0435 \u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435",
        "Mouse Drag": "\u041F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435 \u043C\u044B\u0448\u044C\u044E",
        "Two-Finger vertically": "\u0414\u0432\u0443\u043C\u044F \u043F\u0430\u043B\u044C\u0446\u0430\u043C\u0438 \u043F\u043E \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u0438",
        "Mouse Wheel": "\u041A\u043E\u043B\u0435\u0441\u0438\u043A\u043E \u043C\u044B\u0448\u0438",
        "Two-Finger Move": "\u0414\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0434\u0432\u0443\u043C\u044F \u043F\u0430\u043B\u044C\u0446\u0430\u043C\u0438",
        "Canvas Move": "\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0445\u043E\u043B\u0441\u0442\u0430",
        "Pinch to Zoom": "\u0429\u0435\u043F\u043E\u0442\u043A\u0430, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C",
        "Canvas Zoom": "\u041C\u0430\u0441\u0448\u0442\u0430\u0431 \u0445\u043E\u043B\u0441\u0442\u0430",
        "Reset canvas": "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0445\u043E\u043B\u0441\u0442",
        "No permission of file transfer": "\u041D\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0444\u0430\u0439\u043B\u043E\u0432",
        Note: "\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435",
        Connection: "\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435",
        "Share Screen": "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u044D\u043A\u0440\u0430\u043D\u043E\u043C",
        CLOSE: "\u0417\u0410\u041A\u0420\u042B\u0422\u042C",
        OPEN: "\u041E\u0422\u041A\u0420\u042B\u0422\u042C",
        Chat: "\u0427\u0430\u0442",
        Total: "\u0412\u0441\u0435\u0433\u043E",
        items: "\u043E\u0431\u044C\u0435\u043A\u0442\u044B",
        Selected: "\u0412\u044B\u0431\u0440\u0430\u043D\u043E",
        "Screen Capture": "\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442",
        "Mouse Control": "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043C\u044B\u0448\u044C\u044E",
        "File Transfer": "\u041F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0444\u0430\u0439\u043B\u043E\u0432",
        "Audio Capture": "\u0417\u0430\u0445\u0432\u0430\u0442 \u0430\u0443\u0434\u0438\u043E",
        "File Connection": "\u0424\u0430\u0439\u043B\u043E\u0432\u043E\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435",
        "Screen Connection": "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u044D\u043A\u0440\u0430\u043D\u0430",
        "Do you accept?": "\u0412\u044B \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B?",
        "Open System Setting": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B",
        "How to get Android input permission?": "\u041A\u0430\u043A \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u0432\u0432\u043E\u0434 Android?",
        android_input_permission_tip1: "\u041F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043D\u0430 \u0432\u0432\u043E\u0434 \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u043C\u043E\u0436\u0435\u0442 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u044D\u0442\u0438\u043C Android-\u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u043C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043C\u044B\u0448\u0438.",
        android_input_permission_tip2: "\u041F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0445 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A, \u043D\u0430\u0439\u0434\u0438\u0442\u0435 \u0438 \u0432\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 [\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u043B\u0443\u0436\u0431\u044B], \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0441\u043B\u0443\u0436\u0431\u0443 [RustDesk Input].",
        android_new_connection_tip: "\u041F\u043E\u043B\u0443\u0447\u0435\u043D \u043D\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432\u0430\u0448\u0438\u043C \u0442\u0435\u043A\u0443\u0449\u0438\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E\u043C.",
        android_service_will_start_tip: "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0437\u0430\u0445\u0432\u0430\u0442\u0430 \u044D\u043A\u0440\u0430\u043D\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0441\u043B\u0443\u0436\u0431\u0443, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044F \u0434\u0440\u0443\u0433\u0438\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u043C \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044C \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0441 \u044D\u0442\u043E\u0433\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430.",
        android_stop_service_tip: "\u0417\u0430\u043A\u0440\u044B\u0442\u0438\u0435 \u0441\u043B\u0443\u0436\u0431\u044B \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0437\u0430\u043A\u0440\u043E\u0435\u0442 \u0432\u0441\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F.",
        android_version_audio_tip: "\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F Android \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0437\u0430\u0445\u0432\u0430\u0442 \u0437\u0432\u0443\u043A\u0430, \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0435\u0435 \u0434\u043E Android 10 \u0438\u043B\u0438 \u0432\u044B\u0448\u0435.",
        android_start_service_tip: "\u041A\u043E\u0441\u043D\u0438\u0442\u0435\u0441\u044C [\u0417\u0430\u043F\u0443\u0441\u043A \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430] \u0438\u043B\u0438 \u041E\u0422\u041A\u0420\u042B\u0422\u042C \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 [\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442], \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0441\u043B\u0443\u0436\u0431\u0443 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u044D\u043A\u0440\u0430\u043D\u0430.",
        Account: "\u0410\u043A\u043A\u0430\u0443\u043D\u0442"
    },
    ptbr: {
        Status: "Status",
        "Your Desktop": "Seu Desktop",
        desk_tip: "Seu desktop pode ser acessado com este ID e senha.",
        Password: "Senha",
        Ready: "Pronto",
        Established: "Estabelecido",
        connecting_status: "Conectando \xE0 rede do RustDesk...",
        "Enable Service": "Habilitar Servi\xE7o",
        "Start Service": "Iniciar Servi\xE7o",
        "Service is running": "Servi\xE7o est\xE1 em execu\xE7\xE3o",
        "Service is not running": "Servi\xE7o n\xE3o est\xE1 em execu\xE7\xE3o",
        not_ready_status: "N\xE3o est\xE1 pronto. Por favor verifique sua conex\xE3o",
        "Control Remote Desktop": "Controle o Desktop \xE0 dist\xE2ncia",
        "Transfer File": "Transferir Arquivo",
        Connect: "Conectar",
        "Recent Sessions": "Sess\xF5es recentes",
        "Address Book": "Lista de Endere\xE7os",
        Confirmation: "Confirma\xE7\xE3o",
        "TCP Tunneling": "Tunelamento TCP",
        Remove: "Remover",
        "Refresh random password": "Atualizar senha aleat\xF3ria",
        "Set your own password": "Configure sua pr\xF3pria senha",
        "Enable Keyboard/Mouse": "Habilitar Teclado/Mouse",
        "Enable Clipboard": "Habilitar \xC1rea de Transfer\xEAncia",
        "Enable File Transfer": "Habilitar Transfer\xEAncia de Arquivos",
        "Enable TCP Tunneling": "Habilitar Tunelamento TCP",
        "IP Whitelisting": "Whitelisting de IP",
        "ID/Relay Server": "Servidor ID/Relay",
        "Stop service": "Parar servi\xE7o",
        "Change ID": "Alterar ID",
        Website: "Website",
        About: "Sobre",
        Mute: "Emudecer",
        "Audio Input": "Endtrada de \xC1udio",
        "ID Server": "Servidor de ID",
        "Relay Server": "Servidor de Relay",
        "API Server": "Servidor da API",
        invalid_http: "deve iniciar com http:// ou https://",
        "Invalid IP": "IP inv\xE1lido",
        id_change_tip: "Somente os caracteres a-z, A-Z, 0-9 e _ (sublinhado) s\xE3o permitidos. A primeira letra deve ser a-z, A-Z. Comprimento entre 6 e 16.",
        "Invalid format": "Formato inv\xE1lido",
        "This function is turned off by the server": "Esta funcionalidade foi desligada pelo servidor",
        "Not available": "Indispon\xEDvel",
        "Too frequent": "Muito frequente",
        Cancel: "Cancelar",
        Skip: "Pular",
        Close: "Fechar",
        Retry: "Tentar novamente",
        OK: "OK",
        "Password Required": "Senha Necess\xE1ria",
        "Please enter your password": "Por favor informe sua senha",
        "Remember password": "Lembrar senha",
        "Wrong Password": "Senha Incorreta",
        "Do you want to enter again?": "Voc\xEA quer entrar novamente?",
        "Connection Error": "Erro de Conex\xE3o",
        Error: "Erro",
        "Reset by the peer": "Reiniciado pelo par",
        "Connecting...": "Conectando...",
        "Connection in progress. Please wait.": "Conex\xE3o em progresso. Aguarde por favor.",
        "Please try 1 minute later": "Por favor tente ap\xF3s 1 minuto",
        "Login Error": "Erro de Login",
        Successful: "Sucesso",
        "Connected, waiting for image...": "Conectado. Aguardando pela imagem...",
        Name: "Nome",
        Type: "Tipo",
        Modified: "Modificado",
        Size: "Tamanho",
        "Show Hidden Files": "Mostrar Arquivos Ocultos",
        Receive: "Receber",
        Send: "Enviar",
        "Refresh File": "Atualizar Arquivo",
        Local: "Local",
        Remote: "Remoto",
        "Remote Computer": "Computador Remoto",
        "Local Computer": "Computador Local",
        "Confirm Delete": "Comfirmar Apagar",
        Delete: "Apagar",
        Properties: "Propriedades",
        "Multi Select": "Sele\xE7\xE3o M\xFAltipla",
        "Empty Directory": "Diret\xF3rio Vazio",
        "Not an empty directory": "Diret\xF3rio n\xE3o est\xE1 vazio",
        "Are you sure you want to delete this file?": "Tem certeza que deseja apagar este arquivo?",
        "Are you sure you want to delete this empty directory?": "Tem certeza que deseja apagar este diret\xF3rio vazio?",
        "Are you sure you want to delete the file of this directory?": "Tem certeza que deseja apagar este arquivo deste diret\xF3rio?",
        "Do this for all conflicts": "Fazer isto para todos os conflitos",
        "This is irreversible!": "Isso \xE9 irrevers\xEDvel!",
        Deleting: "Apagando",
        files: "arquivos",
        Waiting: "Aguardando",
        Finished: "Completo",
        Speed: "Velocidade",
        "Custom Image Quality": "Qualidade Visual Personalizada",
        "Privacy mode": "Modo privado",
        "Block user input": "Bloquear entrada de usu\xE1rio",
        "Unblock user input": "Desbloquear entrada de usu\xE1rio",
        "Adjust Window": "Ajustar Janela",
        Original: "Original",
        Shrink: "Reduzir",
        Stretch: "Aumentar",
        "Good image quality": "Qualidade visual boa",
        Balanced: "Balanceada",
        "Optimize reaction time": "Otimizar tempo de rea\xE7\xE3o",
        Custom: "Personalizado",
        "Show remote cursor": "Mostrar cursor remoto",
        "Disable clipboard": "Desabilitar \xE1rea de transfer\xEAncia",
        "Lock after session end": "Bloquear ap\xF3s o fim da sess\xE3o",
        Insert: "Inserir",
        "Insert Lock": "Inserir Trava",
        Refresh: "Atualizar",
        "ID does not exist": "ID n\xE3o existe",
        "Failed to connect to rendezvous server": "Falha ao conectar ao servidor de rendezvous",
        "Please try later": "Por favor tente mais tarde",
        "Remote desktop is offline": "Desktop remoto est\xE1 offline",
        "Key mismatch": "Chaves incompat\xEDveis",
        Timeout: "Tempo esgotado",
        "Failed to connect to relay server": "Falha ao conectar ao servidor de relay",
        "Failed to connect via rendezvous server": "Falha ao conectar ao servidor de rendezvous",
        "Failed to connect via relay server": "Falha ao conectar atrav\xE9s do servidor de relay",
        "Failed to make direct connection to remote desktop": "Falha ao fazer conex\xE3o direta ao desktop remoto",
        "Set Password": "Definir Senha",
        "OS Password": "Senha do SO",
        install_tip: "Devido ao UAC, o RustDesk n\xE3o funciona corretamente como o lado remoto em alguns casos. Para evitar o UAC, por favor clique no bot\xE3o abaixo para instalar o RustDesk no sistema.",
        "Click to upgrade": "Clique para fazer o upgrade",
        "Click to download": "Clique para baixar",
        "Click to update": "Clique para fazer o update",
        "Configuration Permissions": "Permiss\xF5es de Configura\xE7\xE3o",
        Configure: "Configurar",
        config_acc: 'Para controlar seu Desktop remotamente, voc\xEA precisa conceder ao RustDesk permiss\xF5es de "Acessibilidade".',
        config_screen: 'Para acessar seu Desktop remotamente, voc\xEA precisa conceder ao RustDesk permiss\xF5es de "Gravar a Tela"/',
        "Installing ...": "Instalando ...",
        Install: "Instalar",
        Installation: "Instala\xE7\xE3o",
        "Installation Path": "Caminho da Instala\xE7\xE3o",
        "Create start menu shortcuts": "Criar atalhos no menu iniciar",
        "Create desktop icon": "Criar \xEDcone na \xE1rea de trabalho",
        agreement_tip: "Ao iniciar a instala\xE7\xE3o, voc\xEA concorda com o acordo de licen\xE7a.",
        "Accept and Install": "Aceitar e Instalar",
        "End-user license agreement": "Acordo de licen\xE7a do usu\xE1rio final",
        "Generating ...": "Gerando ...",
        "Your installation is lower version.": "Sua instala\xE7\xE3o \xE9 de uma vers\xE3o menor.",
        not_close_tcp_tip: "N\xE3o feche esta janela enquanto estiver utilizando o t\xFAnel",
        "Listening ...": "Escutando ...",
        "Remote Host": "Host Remoto",
        "Remote Port": "Porta Remota",
        Action: "A\xE7\xE3o",
        Add: "Adicionar",
        "Local Port": "Porta Local",
        setup_server_tip: "Para uma conex\xE3o mais r\xE1pida, por favor configure seu pr\xF3prio servidor",
        "Too short, at least 6 characters.": "Muito curto, pelo menos 6 caracteres.",
        "The confirmation is not identical.": "A confirma\xE7\xE3o n\xE3o \xE9 id\xEAntica.",
        Permissions: "Permiss\xF5es",
        Accept: "Aceitar",
        Dismiss: "Dispensar",
        Disconnect: "Desconectar",
        "Allow using keyboard and mouse": "Permitir o uso de teclado e mouse",
        "Allow using clipboard": "Permitir o uso da \xE1rea de transfer\xEAncia",
        "Allow hearing sound": "Permitir escutar som",
        "Allow file transfer": "Permitir transfer\xEAncia de arquivo",
        "File transfer": "Transfer\xEAncia de arquivo",
        Connected: "Conectado",
        "Direct and encrypted connection": "Conex\xE3o direta e criptografada",
        "Relayed and encrypted connection": "Conex\xE3o via relay e criptografada",
        "Direct and unencrypted connection": "Conex\xE3o direta e n\xE3o criptografada",
        "Relayed and unencrypted connection": "Conex\xE3o via relay e n\xE3o criptografada",
        "Enter Remote ID": "Informe o ID Remoto",
        "Enter your password": "Informe sua senha",
        "Logging in...": "Fazendo Login...",
        "Enable RDP session sharing": "Habilitar compartilhamento de sess\xE3o RDP",
        "Auto Login": 'Login Autom\xE1tico (Somente v\xE1lido se voc\xEA habilitou "Bloquear ap\xF3s o fim da sess\xE3o")',
        "Enable Direct IP Access": "Habilitar Acesso IP Direto",
        Rename: "Renomear",
        Space: "Espa\xF5",
        "Create Desktop Shortcut": "Criar Atalho na \xC1rea de Trabalho",
        "Change Path": "Alterar Caminho",
        "Create Folder": "Criar Diret\xF3rio",
        "Please enter the folder name": "Por favor informe o nome do diret\xF3rio",
        "Fix it": "Conserte",
        Warning: "Aguardando",
        "Login screen using Wayland is not supported": "Tela de Login utilizando Wayland n\xE3o \xE9 suportada",
        "Reboot required": "Reinicializa\xE7\xE3o necess\xE1ria",
        "Unsupported display server ": "Servidor de display n\xE3o suportado",
        "x11 expected": "x11 esperado",
        Port: "Porta",
        Settings: "Configura\xE7\xF5es",
        Username: "Nome de usu\xE1rio",
        "Invalid port": "Porta inv\xE1lida",
        "Closed manually by the peer": "Fechada manualmente pelo par",
        "Enable remote configuration modification": "Habilitar modifica\xE7\xF5es de configura\xE7\xE3o remotas",
        "Run without install": "Executar sem instalar",
        "Always connected via relay": "Sempre conectado via relay",
        "Always connect via relay": "Sempre conectar via relay",
        whitelist_tip: "Somente IPs na whitelist podem me acessar",
        Login: "Login",
        Logout: "Sair",
        Tags: "Tags",
        "Search ID": "Buscar ID",
        "Current Wayland display server is not supported": "Servidor de display Wayland atual n\xE3o \xE9 suportado",
        whitelist_sep: "Separado por v\xEDrcula, ponto-e-v\xEDrgula, espa\xE7os ou nova linha",
        "Add ID": "Adicionar ID",
        "Add Tag": "Adicionar Tag",
        "Unselect all tags": "Desselecionar todas as tags",
        "Network error": "Erro de rede",
        "Username missed": "Nome de usu\xE1rio faltante",
        "Password missed": "Senha faltante",
        "Wrong credentials": "Nome de usu\xE1rio ou senha incorretos",
        "Edit Tag": "Editar Tag",
        "Unremember Password": "Esquecer Senha",
        Favorites: "Favoritos",
        "Add to Favorites": "Adicionar aos Favoritos",
        "Remove from Favorites": "Remover dos Favoritos",
        Empty: "Vazio",
        "Invalid folder name": "Nome de diret\xF3rio inv\xE1lido",
        "Socks5 Proxy": "Proxy Socks5",
        Hostname: "Nome de anfitri\xE3o",
        Discovered: "Descoberto",
        install_daemon_tip: "Para inicializa\xE7\xE3o junto ao sistema, voc\xEA deve instalar o servi\xE7o de sistema.",
        "Remote ID": "ID Remoto",
        Paste: "Colar",
        "Paste here?": "Colar aqui?",
        "Are you sure to close the connection?": "Tem certeza que deseja fechar a conex\xE3o?",
        "Download new version": "Baixar nova vers\xE3o",
        "Touch mode": "Modo toque",
        "Mouse mode": "Modo mouse",
        "One-Finger Tap": "Toque com um dedo",
        "Left Mouse": "Bot\xE3o esquerdo do mouse",
        "One-Long Tap": "Um toque longo",
        "Two-Finger Tap": "Toque com dois dedos",
        "Right Mouse": "Bot\xE3o direito do mouse",
        "One-Finger Move": "Mover com um dedo",
        "Double Tap & Move": "Toque duplo & mover",
        "Mouse Drag": "Arrastar com o mouse",
        "Two-Finger vertically": "Dois dedos verticalmente",
        "Mouse Wheel": "Roda do Mouse",
        "Two-Finger Move": "Mover com dois dedos",
        "Canvas Move": "Mover Tela",
        "Pinch to Zoom": "Beliscar para Zoom",
        "Canvas Zoom": "Zoom na Tela",
        "Reset canvas": "Reiniciar tela",
        "No permission of file transfer": "Sem permiss\xF5es de transfer\xEAncia de arquivo",
        Note: "Nota",
        Connection: "Conex\xE3o",
        "Share Screen": "Compartilhar Tela",
        CLOSE: "FECHAR",
        OPEN: "ABRIR",
        Chat: "Chat",
        Total: "Total",
        items: "itens",
        Selected: "Selecionado",
        "Screen Capture": "Captura de Tela",
        "Mouse Control": "Controle do Mouse",
        "File Transfer": "Transfer\xEAncia de Arquivo",
        "Audio Capture": "Captura de \xC1udio",
        "File Connection": "Conex\xE3o de Arquivo",
        "Screen Connection": "Conex\xE3o de Tela",
        "Do you accept?": "Voc\xEA aceita?",
        "Open System Setting": "Abrir Configura\xE7\xF5es do Sistema",
        "How to get Android input permission?": "Como habilitar a permiss\xE3o de entrada do Android?",
        android_input_permission_tip1: "Ap\xF3s obter permiss\xE3o de entrada, o dispositivo remoto pode controlar este dispositivo Android via mouse",
        android_input_permission_tip2: "Por favor v\xE1 para a pr\xF3xima p\xE1gina de configura\xE7\xE3o do sistema, encontre e entre [Servi\xE7os Instalados], HABILITE o servi\xE7o [RustDesk Input]",
        android_new_connection_tip: "Nova requisi\xE7\xE3o de controle recebida, solicita o controle de seu dispositivo atual.",
        android_service_will_start_tip: "Habilitar a Captura de Tela ir\xE1 automaticamente inicalizar o servi\xE7o, permitindo que outros dispositivos solicitem uma conex\xE3o deste dispositivo.",
        android_stop_service_tip: "Fechar o servi\xE7o ir\xE1 automaticamente fechar todas as conex\xF5es estabelecidas.",
        android_version_audio_tip: "A vers\xE3o atual do Android n\xE3o suporta captura de \xE1udio, por favor atualize para o Android 10 ou maior.",
        android_start_service_tip: "Toque [Iniciar Servi\xE7o] ou ABRA a permiss\xE3o [Captura de Tela] para iniciar o servi\xE7o de compartilhamento de tela.",
        Account: "Conta"
    },
    de: {
        Status: "Status",
        "Your Desktop": "Ihr Desktop",
        desk_tip: "Mit dieser ID und diesem Passwort k\xF6nnen Sie auf Ihren Desktop zugreifen.",
        Password: "Passwort",
        Ready: "Bereit",
        Established: "Etabliert",
        connecting_status: "Verbinden mit dem RustDesk-Netzwerk...",
        "Enable Service": "Verbindungsserver einschalten",
        "Start Service": "Starte Verbindungsserver",
        "Service is running": "Dienst l\xE4uft",
        "Service is not running": "Der Verbindungsserver l\xE4uft nicht",
        not_ready_status: "Nicht bereit. Bitte \xFCberpr\xFCfen Sie Ihre Verbindung",
        "Control Remote Desktop": "Entfernten Desktop steuern",
        "Transfer File": "Datei \xFCbertragen",
        Connect: "Verbinden",
        "Recent Sessions": "Letzte Sitzungen",
        "Address Book": "Adressbuch",
        Confirmation: "Best\xE4tigung",
        "TCP Tunneling": "TCP Tunneln",
        Remove: "Entfernen",
        "Refresh random password": "Zuf\xE4lliges Passwort aktualisieren",
        "Set your own password": "Legen Sie Ihr eigenes Passwort fest",
        "Enable Keyboard/Mouse": "Tastatur/Maus einschalten",
        "Enable Clipboard": "Zwischenablage einschalten",
        "Enable File Transfer": "Datei\xFCbertragung aktivieren",
        "Enable TCP Tunneling": "TCP-Tunneling einschalten",
        "IP Whitelisting": "IP Freigabeliste",
        "ID/Relay Server": "ID/Verbindungsserver",
        "Stop service": "Verbindungsserver ausschalten",
        "Change ID": "ID wechseln",
        Website: "Webseite",
        About: "\xDCber",
        Mute: "Stummschalten",
        "Audio Input": "Audio-Eingang",
        "ID Server": "ID Server",
        "Relay Server": "Verbindungsserver Server",
        "API Server": "API Server",
        invalid_http: "Muss mit http:// oder https:// beginnen",
        "Invalid IP": "Ung\xFCltige IP-Adresse",
        id_change_tip: "Nur die Zeichen a-z, A-Z, 0-9 und _ (Unterstrich) sind erlaubt. Der erste Buchstabe muss a-z, A-Z sein. L\xE4nge zwischen 6 und 16.",
        "Invalid format": "Ung\xFCltiges Format",
        "This function is turned off by the server": "Diese Funktion wird vom Server nicht bereitgestellt",
        "Not available": "Nicht verf\xFCgbar",
        "Too frequent": "Zu h\xE4ufig",
        Cancel: "Abbrechen",
        Skip: "\xDCberspringen",
        Close: "Schlie\xDFen",
        Retry: "Nochmal versuchen",
        OK: "OK",
        "Password Required": "Passwort erforderlich",
        "Please enter your password": "Bitte geben Sie Ihr Passwort ein",
        "Remember password": "Passwort merken",
        "Wrong Password": "Falsches Passwort",
        "Do you want to enter again?": "M\xF6chten Sie erneut teilnehmen?",
        "Connection Error": "Verbindungsfehler",
        Error: "Fehler",
        "Reset by the peer": "Zur\xFCcksetzen durch die Gegenstelle",
        "Connecting...": "Verbinden...",
        "Connection in progress. Please wait.": "Die Verbindung wird hergestellt. Bitte warten Sie.",
        "Please try 1 minute later": "Bitte versuchen Sie es 1 Minute sp\xE4ter",
        "Login Error": "Anmeldefehler",
        Successful: "Erfolgreich",
        "Connected, waiting for image...": "Verbunden, warten auf Bild...",
        Name: "Name",
        Type: "Typ",
        Modified: "Ge\xE4ndert",
        Size: "Gr\xF6\xDFe",
        "Show Hidden Files": "Versteckte Dateien anzeigen",
        Receive: "Empfangen",
        Send: "Senden",
        "Refresh File": "Datei aktualisieren",
        Local: "Lokaler",
        Remote: "Entfernter",
        "Remote Computer": "Entfernter Computer",
        "Local Computer": "Lokaler Computer",
        "Confirm Delete": "L\xF6schen best\xE4tigen",
        Delete: "L\xF6schen",
        Properties: "Eigenschaften",
        "Multi Select": "Mehrfachauswahl",
        "Empty Directory": "Leeres Verzeichnis",
        "Not an empty directory": "Kein leeres Verzeichnis",
        "Are you sure you want to delete this file?": "Sind Sie sicher, dass Sie diese Datei l\xF6schen wollen?",
        "Are you sure you want to delete this empty directory?": "Sind Sie sicher, dass Sie dieses leere Verzeichnis l\xF6schen m\xF6chten?",
        "Are you sure you want to delete the file of this directory?": "Sind Sie sicher, dass Sie die Datei dieses Verzeichnisses l\xF6schen m\xF6chten?",
        "Do this for all conflicts": "Dies gilt f\xFCr alle Konflikte",
        "This is irreversible!": "Dies ist irreversibel!",
        Deleting: "L\xF6schen",
        files: "Dateien",
        Waiting: "Warten",
        Finished: "Fertiggestellt",
        Speed: "Geschwindigkeit",
        "Custom Image Quality": "Individuelle Bildqualit\xE4t",
        "Privacy mode": "Datenschutz-Modus",
        "Block user input": "Benutzereingaben blockieren",
        "Unblock user input": "Benutzereingaben freigeben",
        "Adjust Window": "Fenster anpassen",
        Original: "Original",
        Shrink: "Geschrumpft",
        Stretch: "Gestreckt",
        "Good image quality": "Gute Bildqualit\xE4t",
        Balanced: "Ausgeglichen",
        "Optimize reaction time": "Optimierte Reaktionszeit",
        Custom: "Benutzerdefiniert",
        "Show remote cursor": "Ferngesteuerten Cursor anzeigen",
        "Disable clipboard": "Zwischenablage deaktivieren",
        "Lock after session end": "Sperren nach Sitzungsende",
        Insert: "Einf\xFCgen",
        "Insert Lock": "Sperre einf\xFCgen",
        Refresh: "Aktualisieren",
        "ID does not exist": "Die ID existiert nicht",
        "Failed to connect to rendezvous server": "Verbindung zum Verbindungsserver fehlgeschlagen",
        "Please try later": "Bitte versuchen Sie es sp\xE4ter",
        "Remote desktop is offline": "Entfernter Desktop ist offline",
        "Key mismatch": "Schl\xFCssel nicht \xFCbereinstimmend",
        Timeout: "Zeit\xFCberschreitung",
        "Failed to connect to relay server": "Verbindung zum Verbindungsserver fehlgeschlagen",
        "Failed to connect via rendezvous server": "Verbindung \xFCber rendezvous server fehlgeschlagen",
        "Failed to connect via relay server": "Verbindung \xFCber den Verbindungsserver ist fehlgeschlagen",
        "Failed to make direct connection to remote desktop": "Direkte Verbindung zum Entfernten-Desktop konnte nicht hergestellt werden",
        "Set Password": "Passwort festlegen",
        "OS Password": "Betriebssystem-Passwort",
        install_tip: "Aufgrund der UAC kann RustDesk in manchen F\xE4llen nicht ordnungsgem\xE4\xDF auf der Gegenseite funktionieren. Um UAC zu vermeiden, klicken Sie bitte auf die Schaltfl\xE4che unten, um RustDesk auf dem System zu installieren",
        "Click to upgrade": "Zum Upgrade anklicken",
        "Click to download": "Zum Herunterladen klicken",
        "Click to update": "Zum Aktualisieren klicken",
        "Configuration Permissions": "Konfigurationsberechtigungen",
        Configure: "Konfigurieren",
        config_acc: 'Um Ihren Desktop aus der Ferne zu steuern, m\xFCssen Sie RustDesk "Zugangs" Rechte erteilen.',
        config_screen: 'Um aus der Ferne auf Ihren Desktop zugreifen zu k\xF6nnen, m\xFCssen Sie RustDesk "Bildschirm-Aufnahme" Berechtigungen erteilen.',
        "Installing ...": "Installiere ...",
        Install: "Installieren",
        Installation: "Einrichtung",
        "Installation Path": "Einrichtungs Pfad",
        "Create start menu shortcuts": "Startmen\xFC Verkn\xFCpfungen erstellen",
        "Create desktop icon": "Desktop Symbol erstellen",
        agreement_tip: "Wenn Sie die Einrichtung starten, akzeptieren Sie die Lizenzvereinbarung",
        "Accept and Install": "Akzeptieren und installieren",
        "End-user license agreement": "Lizenzvereinbarung f\xFCr Endbenutzer",
        "Generating ...": "Generierung ...",
        "Your installation is lower version.": "Ihre Installation ist eine niedrigere Version.",
        not_close_tcp_tip: "Schlie\xDFen Sie dieses Fenster nicht, w\xE4hrend Sie den Tunnel benutzen.",
        "Listening ...": "H\xF6ren ...",
        "Remote Host": "Entfernter Rechner",
        "Remote Port": "Entfernter Port",
        Action: "Aktion",
        Add: "Hinzuf\xFCgen",
        "Local Port": "Lokaler Port",
        setup_server_tip: "F\xFCr eine schnellere Verbindung, richten Sie bitte Ihren eigenen Verbindungsserver ein",
        "Too short, at least 6 characters.": "Zu kurz, mindestens 6 Zeichen.",
        "The confirmation is not identical.": "Die Best\xE4tigung ist nicht identisch.",
        Permissions: "Berechtigungen",
        Accept: "Akzeptieren",
        Dismiss: "Ablehnen",
        Disconnect: "Verbindung trennen",
        "Allow using keyboard and mouse": "Erlaubt die Verwendung von Tastatur und Maus",
        "Allow using clipboard": "Verwendung der Zwischenablage zulassen",
        "Allow hearing sound": "Erlaubt das H\xF6ren von Sound",
        "Allow file transfer": "Datei\xFCbertragung zulassen",
        "File transfer": "Datei \xDCbertragung",
        Connected: "Verbunden",
        "Direct and encrypted connection": "Direkte und verschl\xFCsselte Verbindung",
        "Relayed and encrypted connection": "Vermittelte und verschl\xFCsselte Verbindung",
        "Direct and unencrypted connection": "Direkte und unverschl\xFCsselte Verbindung",
        "Relayed and unencrypted connection": "Vermittelte und unverschl\xFCsselte Verbindung",
        "Enter Remote ID": "Remote-ID eingeben",
        "Enter your password": "Geben Sie Ihr Passwort ein",
        "Logging in...": "Anmeldung...",
        "Enable RDP session sharing": "RDP-Sitzungsfreigabe aktivieren",
        "Auto Login": 'Automatisches Login (nur g\xFCltig, wenn Sie "Sperren nach Sitzungsende" eingestellt haben)',
        "Enable Direct IP Access": "Direkten IP-Zugang aktivieren",
        Rename: "Umbenennen",
        Space: "Platz",
        "Create Desktop Shortcut": "Desktop-Verkn\xFCpfung erstellen",
        "Change Path": "Pfad \xE4ndern",
        "Create Folder": "Ordner erstellen",
        "Please enter the folder name": "Bitte geben Sie den Ordnernamen ein",
        "Fix it": "Reparieren",
        Warning: "Warnung",
        "Login screen using Wayland is not supported": "Anmeldebildschirm mit Wayland wird nicht unterst\xFCtzt",
        "Reboot required": "Neustart erforderlich",
        "Unsupported display server ": "Nicht unterst\xFCtzter Display-Server",
        "x11 expected": "X11 erwartet",
        Port: "Port",
        Settings: "Einstellungen",
        Username: " Benutzername",
        "Invalid port": "Ung\xFCltiger Port",
        "Closed manually by the peer": "Vom Peer manuell geschlossen",
        "Enable remote configuration modification": "\xC4nderung der Fernkonfiguration zulassen",
        "Run without install": "Ohne Installation ausf\xFChren",
        "Always connected via relay": "Immer \xFCber Verbindungsserver verbunden",
        "Always connect via relay": "Verbindung immer \xFCber Verbindungsserver",
        whitelist_tip: "Nur IPs auf der Freigabeliste k\xF6nnen auf mich zugreifen",
        Login: "Anmeldung",
        Logout: "Abmeldung",
        Tags: "Stichworte",
        "Search ID": "Suche ID",
        "Current Wayland display server is not supported": "Der aktuelle Wayland-Anzeigeserver wird nicht unterst\xFCtzt",
        whitelist_sep: "Getrennt durch Komma, Semikolon, Leerzeichen oder Zeilenumbruch",
        "Add ID": "ID hinzuf\xFCgen",
        "Add Tag": "Stichwort hinzuf\xFCgen",
        "Unselect all tags": "Alle Stichworte abw\xE4hlen",
        "Network error": "Netzwerkfehler",
        "Username missed": "Benutzername fehlt",
        "Password missed": "Passwort vergessen",
        "Wrong credentials": "Falsche Anmeldedaten",
        "Edit Tag": "Stichwort bearbeiten",
        "Unremember Password": "Passwort nicht merken",
        Favorites: "Favoriten",
        "Add to Favorites": "Zu Favoriten hinzuf\xFCgen",
        "Remove from Favorites": "Entferne von Favoriten",
        Empty: "Leer",
        "Invalid folder name": "Ung\xFCltiger Ordnername",
        "Socks5 Proxy": "Socks5 Proxy",
        Hostname: "Rechnername",
        Discovered: "Gefunden",
        install_daemon_tip: "Um beim Booten zu starten, m\xFCssen Sie den Systemdienst installieren",
        "Remote ID": "Entfernte ID",
        Paste: "Einf\xFCgen",
        "Paste here?": "Hier einf\xFCgen?",
        "Are you sure to close the connection?": "Sind Sie sicher, dass Sie die Verbindung schlie\xDFen wollen?",
        "Download new version": "Neue Version herunterladen",
        "Touch mode": "Touch-Modus",
        "Mouse mode": "Mouse-Modus",
        "One-Finger Tap": "Ein Fingertipp",
        "Left Mouse": "Linke Maus",
        "One-Long Tap": "Tippen Sie mit einem Finger lang",
        "Two-Finger Tap": "Zwei Finger tippen",
        "Right Mouse": "Rechte Maus",
        "One-Finger Move": "Eine Fingerbewegung",
        "Double Tap & Move": "Doppeltippen und verschieben",
        "Mouse Drag": "Maus ziehen",
        "Two-Finger vertically": "Zwei Finger vertikal",
        "Mouse Wheel": "Mausrad",
        "Two-Finger Move": "Zwei Finger Bewegung",
        "Canvas Move": "Leinwand bewegen",
        "Pinch to Zoom": "Zum Zoomen kneifen",
        "Canvas Zoom": "Leinwand Zoom",
        "Reset canvas": "Anzeige zur\xFCcksetzen",
        "No permission of file transfer": "Keine Erlaubnis zur Datei\xFCbertragung",
        Note: "Notiz",
        Connection: "Verbindung",
        "Share Screen": "Bildschirm freigeben",
        CLOSE: "NAH DRAN",
        OPEN: "OFFEN",
        Chat: "Plaudern",
        Total: "Gesamt",
        items: "Artikel",
        Selected: "Ausgew\xE4hlt",
        "Screen Capture": "Bildschirmaufnahme",
        "Mouse Control": "Maussteuerung",
        "File Transfer": "Datei \xDCbertragung",
        "Audio Capture": "Audioaufnahme",
        "File Connection": "Dateiverbindung",
        "Screen Connection": "Bildschirmanschluss",
        "Do you accept?": "Akzeptieren Sie?",
        "Open System Setting": "Systemeinstellung \xF6ffnen",
        "How to get Android input permission?": "Wie erhalte ich eine Android-Eingabeberechtigung?",
        android_input_permission_tip1: "Nach Erhalt der Eingabeerlaubnis kann das entfernte Ger\xE4t dieses Android-Ger\xE4t per Maus steuern",
        android_input_permission_tip2: "Bitte gehen Sie zur n\xE4chsten Systemeinstellungsseite, suchen und geben Sie [Installierte Dienste] ein, schalten Sie den Dienst [RustDesk Input] ein",
        android_new_connection_tip: "Es wurde eine neue Steuerungsanforderung empfangen, die Ihr aktuelles Ger\xE4t steuern m\xF6chte.",
        android_service_will_start_tip: "Durch das Einschalten der Bildschirmaufnahme wird der Dienst automatisch gestartet, sodass andere Ger\xE4te eine Verbindung von diesem Ger\xE4t anfordern k\xF6nnen.",
        android_stop_service_tip: "Durch das Schlie\xDFen des Dienstes werden automatisch alle hergestellten Verbindungen geschlossen.",
        android_version_audio_tip: "Die aktuelle Android-Version unterst\xFCtzt keine Audioaufnahme, bitte aktualisieren Sie auf Android 10 oder h\xF6her.",
        android_start_service_tip: "Tippen Sie auf [Dienst starten] oder \xD6FFNEN Sie die Berechtigung [Bildschirmaufnahme], um den Bildschirmfreigabedienst zu starten.",
        Account: "Konto"
    },
    eo: {
        Status: "Stato",
        "Your Desktop": "Via aparato",
        desk_tip: "Via aparato povas esti alirita kun tiu identigilo kaj pasvorto",
        Password: "Pasvorto",
        Ready: "Preta",
        Established: "",
        connecting_status: "Konektante al la reto RustDesk...",
        "Enable Service": "Ebligi servon",
        "Start Service": "Starti servon",
        "Service is running": "",
        "Service is not running": "La servo ne funkcias",
        not_ready_status: "Ne preta, bonvolu kontroli la retkonekto",
        "Control Remote Desktop": "Kontroli foran aparaton",
        "Transfer File": "Transigi dosieron",
        Connect: "Konekti al",
        "Recent Sessions": "Lastaj sesioj",
        "Address Book": "Adresaro",
        Confirmation: "Konfirmacio",
        "TCP Tunneling": "Tunelado TCP",
        Remove: "Forigi",
        "Refresh random password": "Regeneri hazardan pasvorton",
        "Set your own password": "Agordi vian propran pasvorton",
        "Enable Keyboard/Mouse": "Ebligi klavaro/muso",
        "Enable Clipboard": "Sinkronigi po\u015Don",
        "Enable File Transfer": "Ebligi dosiertransigado",
        "Enable TCP Tunneling": "Ebligi tunelado TCP",
        "IP Whitelisting": "Listo de IP akceptataj",
        "ID/Relay Server": "Identigila/Relajsa servilo",
        "Stop service": "Haltu servon",
        "Change ID": "\u015Can\u011Di identigilon",
        Website: "Retejo",
        About: "Pri",
        Mute: "Muta",
        "Audio Input": "A\u016Ddia enigo",
        "ID Server": "Servilo de identigiloj",
        "Relay Server": "Relajsa servilo",
        "API Server": "Servilo de API",
        invalid_http: "Devas komenci kun http:// a\u016D https://",
        "Invalid IP": "IP nevalida",
        id_change_tip: "Nur la signoj a-z, A-Z, 0-9, _ (substreko) povas esti uzataj. La unua litero povas esti inter a-z, A-Z. La longeco devas esti inter 6 kaj 16.",
        "Invalid format": "Formato nevalida",
        "This function is turned off by the server": "Tiu funkcio estas malebligata de la servilo",
        "Not available": "Nedisponebla",
        "Too frequent": "Tro ofte \u015Dan\u011Dita, bonvolu reprovi poste",
        Cancel: "Nuligi",
        Skip: "Ignori",
        Close: "Fermi",
        Retry: "Reprovi",
        OK: "Konfermi",
        "Password Required": "Pasvorto deviga",
        "Please enter your password": "Bonvolu tajpi vian pasvorton",
        "Remember password": "Memori pasvorton",
        "Wrong Password": "Erara pasvorto",
        "Do you want to enter again?": "\u0108u vi aliri denove?",
        "Connection Error": "Eraro de konektado",
        Error: "Eraro",
        "Reset by the peer": "La konekto estas fermita de la samtavolano",
        "Connecting...": "Konektante...",
        "Connection in progress. Please wait.": "Konektado farata. Bonvolu atendi.",
        "Please try 1 minute later": "Reprovi post 1 minuto",
        "Login Error": "Eraro de konektado",
        Successful: "Sukceso",
        "Connected, waiting for image...": "Konektita, atendante bildon...",
        Name: "Nomo",
        Type: "",
        Modified: "Modifita",
        Size: "Grandeco",
        "Show Hidden Files": "Montri ka\u015Ditajn dosierojn",
        Receive: "Akcepti",
        Send: "Sendi",
        "Refresh File": "",
        Local: "",
        Remote: "",
        "Remote Computer": "Fora komputilo",
        "Local Computer": "Loka komputilo",
        "Confirm Delete": "Konfermi la forigo",
        Delete: "",
        Properties: "",
        "Multi Select": "",
        "Empty Directory": "",
        "Not an empty directory": "",
        "Are you sure you want to delete this file?": "\u0108u vi vere volas forigi tiun dosieron?",
        "Are you sure you want to delete this empty directory?": "",
        "Are you sure you want to delete the file of this directory?": "",
        "Do this for all conflicts": "Same por \u0109iuj konfliktoj",
        "This is irreversible!": "",
        Deleting: "Forigado",
        files: "dosiero",
        Waiting: "Atendante...",
        Finished: "Finita",
        Speed: "",
        "Custom Image Quality": "Agordi bildan kvaliton",
        "Privacy mode": "Modo privata",
        "Block user input": "Bloki uzanta enigo",
        "Unblock user input": "Malbloki uzanta enigo",
        "Adjust Window": "Adapti fenestro",
        Original: "Originala rilatumo",
        Shrink: "\u015Crumpi",
        Stretch: "Stre\u0109i",
        "Good image quality": "Bona bilda kvalito",
        Balanced: "Normala bilda kvalito",
        "Optimize reaction time": "Optimigi reakcia tempo",
        Custom: "Personigi bilda kvalito",
        "Show remote cursor": "Montri foran kursoron",
        "Disable clipboard": "Malebligi po\u015Don",
        "Lock after session end": "\u015Closi foran komputilon post malkonektado",
        Insert: "Enmeti",
        "Insert Lock": "\u015Closi foran komputilon",
        Refresh: "Refre\u015Digi ekranon",
        "ID does not exist": "La identigilo ne ekzistas",
        "Failed to connect to rendezvous server": "Malsukcesis konekti al la servilo rendezvous",
        "Please try later": "Bonvolu provi poste",
        "Remote desktop is offline": "La fora aparato estas senkonektita",
        "Key mismatch": "Miskongruo de klavoj",
        Timeout: "Konekta posttempo",
        "Failed to connect to relay server": "Malsukcesis konekti al la relajsa servilo",
        "Failed to connect via rendezvous server": "Malsukcesis konekti per servilo rendezvous",
        "Failed to connect via relay server": "Malsukcesis konekti per relajsa servilo",
        "Failed to make direct connection to remote desktop": "Malsukcesis konekti direkte",
        "Set Password": "Agordi pasvorton",
        "OS Password": "Pasvorto de la operaciumo",
        install_tip: "Vi ne uzas instalita versio. Pro limigoj pro UAC, kiel aparato kontrolata, en kelkaj kazoj, ne estos ebla kontroli la muson kaj klavaron a\u016D registri la ekranon. Bonvolu alkliku la butonon malsupre por instali RustDesk sur la operaciumo por eviti la demando supre.",
        "Click to upgrade": "Alklaki por plibonigi",
        "Click to download": "Alklaki por el\u015Duti",
        "Click to update": "Alklaki por \u011Disdatigi",
        "Configuration Permissions": "Permesoj de konfigurado",
        Configure: "Konfiguri",
        config_acc: 'Por uzi vian foran aparaton, bonvolu doni la permeson "alirebleco" al RustDesk.',
        config_screen: 'Por uzi vian foran aparaton, bonvolu doni la permeson "ekranregistrado" al RustDesk.',
        "Installing ...": "Instalante...",
        Install: "Instali",
        Installation: "Instalado",
        "Installation Path": "Vojo de instalo",
        "Create start menu shortcuts": "Aldoni ligilojn sur la startmenuo",
        "Create desktop icon": "Aldoni ligilojn sur la labortablo",
        agreement_tip: "Starti la instaladon signifas akcepti la permesilon.",
        "Accept and Install": "Akcepti kaj instali",
        "End-user license agreement": "Uzanta permesilon",
        "Generating ...": "Generante...",
        "Your installation is lower version.": "Via versio de instala\u0135o estas pli malalta ol la lasta.",
        not_close_tcp_tip: "Bonvolu ne fermu tiun fenestron dum la uzo de la tunelo",
        "Listening ...": "Atendante konekton al la tunelo...",
        "Remote Host": "Fora gastiganto",
        "Remote Port": "Fora pordo",
        Action: "Ago",
        Add: "Aldoni",
        "Local Port": "Loka pordo",
        setup_server_tip: "Se vi bezonas pli rapida konekcio, vi povas krei vian propran servilon",
        "Too short, at least 6 characters.": "Tro mallonga, almena\u016D 6 signoj.",
        "The confirmation is not identical.": "Amba\u016D enigoj ne kongruas",
        Permissions: "Permesoj",
        Accept: "Akcepti",
        Dismiss: "Malakcepti",
        Disconnect: "Malkonekti",
        "Allow using keyboard and mouse": "Permesi la uzon de la klavaro kaj muso",
        "Allow using clipboard": "Permesi la uzon de la po\u015Do",
        "Allow hearing sound": "Permesi la uzon de la sono",
        "Allow file transfer": "Permesi la dosiertransigadon",
        "File transfer": "Dosiertransigado",
        Connected: "Konektata",
        "Direct and encrypted connection": "Konekcio direkta \u0109ifrata",
        "Relayed and encrypted connection": "Konekcio relajsa \u0109ifrata",
        "Direct and unencrypted connection": "Konekcio direkta ne\u0109ifrata",
        "Relayed and unencrypted connection": "Konekcio relajsa ne\u0109ifrata",
        "Enter Remote ID": "Tajpu foran identigilon",
        "Enter your password": "Tajpu vian pasvorton",
        "Logging in...": "Konektante...",
        "Enable RDP session sharing": "Ebligi la kundivido de sesio RDP",
        "Auto Login": "A\u016Dtomata konektado (la \u015Dloso nur estos ebligita post la malebligado de la unua parametro)",
        "Enable Direct IP Access": "Permesi direkta eniro per IP",
        Rename: "Renomi",
        Space: "Spaco",
        "Create Desktop Shortcut": "Krei ligilon sur la labortablon",
        "Change Path": "\u015Can\u011Di vojon",
        "Create Folder": "Krei dosierujon",
        "Please enter the folder name": "Bonvolu enigi la dosiernomon",
        "Fix it": "Riparu \u011Din",
        Warning: "Averto",
        "Login screen using Wayland is not supported": "Konektajn ekranojn uzantajn Wayland ne estas subtenitaj",
        "Reboot required": "Restarto deviga",
        "Unsupported display server ": "La aktuala bilda servilo ne estas subtenita",
        "x11 expected": "Bonvolu uzi x11",
        Port: "Pordo",
        Settings: "Agordoj",
        Username: " Uzanta nomo",
        "Invalid port": "Pordo nevalida",
        "Closed manually by the peer": "Manuale fermita de la samtavolano",
        "Enable remote configuration modification": "Permesi foran redaktadon de la konfiguracio",
        "Run without install": "Plenumi sen instali",
        "Always connected via relay": "\u0108iam konektata per relajso",
        "Always connect via relay": "\u0108iam konekti per relajso",
        whitelist_tip: "Nur la IP en la blanka listo povas kontroli mian komputilon",
        Login: "Konekti",
        Logout: "Malkonekti",
        Tags: "Etikedi",
        "Search ID": "Ser\u0109i ID",
        "Current Wayland display server is not supported": "La aktuala bilda servilo Wayland ne estas subtenita",
        whitelist_sep: "Vi povas uzi komon, punktokomon, spacon a\u016D linsalton kiel apartigilo",
        "Add ID": "Aldoni identigilo",
        "Add Tag": "Aldoni etikedo",
        "Unselect all tags": "Malselekti \u0109iujn etikedojn",
        "Network error": "Reta eraro",
        "Username missed": "Uzantnomo forgesita",
        "Password missed": "Pasvorto forgesita",
        "Wrong credentials": "Identigilo a\u016D pasvorto erara",
        "Edit Tag": "Redakti etikedo",
        "Unremember Password": "Forgesi pasvorton",
        Favorites: "Favorataj",
        "Add to Favorites": "Aldoni al la favorataj",
        "Remove from Favorites": "Forigi el la favorataj",
        Empty: "Malplena",
        "Invalid folder name": "Dosiernomo nevalida",
        "Socks5 Proxy": "Socks5 prokura servilo",
        Hostname: "Nomo de gastiga",
        Discovered: "Malkovritaj",
        install_daemon_tip: "",
        "Remote ID": "Fora identigilo",
        Paste: "Alglui",
        "Paste here?": "",
        "Are you sure to close the connection?": "\u0108u vi vere volas fermi la konekton?",
        "Download new version": "El\u015Duti la novan version",
        "Touch mode": "Tu\u015Da modo",
        "Mouse mode": "",
        "One-Finger Tap": "",
        "Left Mouse": "",
        "One-Long Tap": "",
        "Two-Finger Tap": "",
        "Right Mouse": "",
        "One-Finger Move": "",
        "Double Tap & Move": "",
        "Mouse Drag": "",
        "Two-Finger vertically": "",
        "Mouse Wheel": "",
        "Two-Finger Move": "",
        "Canvas Move": "",
        "Pinch to Zoom": "",
        "Canvas Zoom": "",
        "Reset canvas": "Restarigi kanvaso",
        "No permission of file transfer": "Neniu permeso de dosiertransigo",
        Note: "Notu",
        Connection: "",
        "Share Screen": "",
        CLOSE: "",
        OPEN: "",
        Chat: "",
        Total: "",
        items: "",
        Selected: "",
        "Screen Capture": "",
        "Mouse Control": "",
        "File Transfer": "",
        "Audio Capture": "",
        "File Connection": "",
        "Screen Connection": "",
        "Do you accept?": "",
        "Open System Setting": "",
        "How to get Android input permission?": "",
        android_input_permission_tip1: "",
        android_input_permission_tip2: "",
        android_new_connection_tip: "",
        android_service_will_start_tip: "",
        android_stop_service_tip: "",
        android_version_audio_tip: "",
        android_start_service_tip: "",
        Account: ""
    },
    cn: {
        Status: "\u72B6\u6001",
        "Your Desktop": "\u4F60\u7684\u684C\u9762",
        desk_tip: "\u4F60\u7684\u684C\u9762\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684ID\u548C\u5BC6\u7801\u8BBF\u95EE\u3002",
        Password: "\u5BC6\u7801",
        Ready: "\u5C31\u7EEA",
        Established: "\u5DF2\u5EFA\u7ACB",
        connecting_status: "\u6B63\u5728\u63A5\u5165RustDesk\u7F51\u7EDC...",
        "Enable Service": "\u5141\u8BB8\u670D\u52A1",
        "Start Service": "\u542F\u52A8\u670D\u52A1",
        "Service is running": "\u670D\u52A1\u6B63\u5728\u8FD0\u884C",
        "Service is not running": "\u670D\u52A1\u6CA1\u6709\u542F\u52A8",
        not_ready_status: "\u672A\u5C31\u7EEA\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5",
        "Control Remote Desktop": "\u63A7\u5236\u8FDC\u7A0B\u684C\u9762",
        "Transfer File": "\u4F20\u8F93\u6587\u4EF6",
        Connect: "\u8FDE\u63A5",
        "Recent Sessions": "\u6700\u8FD1\u8BBF\u95EE\u8FC7",
        "Address Book": "\u5730\u5740\u7C3F",
        Confirmation: "\u786E\u8BA4",
        "TCP Tunneling": "TCP\u96A7\u9053",
        Remove: "\u5220\u9664",
        "Refresh random password": "\u5237\u65B0\u968F\u673A\u5BC6\u7801",
        "Set your own password": "\u8BBE\u7F6E\u5BC6\u7801",
        "Enable Keyboard/Mouse": "\u5141\u8BB8\u63A7\u5236\u952E\u76D8/\u9F20\u6807",
        "Enable Clipboard": "\u5141\u8BB8\u540C\u6B65\u526A\u8D34\u677F",
        "Enable File Transfer": "\u5141\u8BB8\u4F20\u8F93\u6587\u4EF6",
        "Enable TCP Tunneling": "\u5141\u8BB8\u5EFA\u7ACBTCP\u96A7\u9053",
        "IP Whitelisting": "IP\u767D\u540D\u5355",
        "ID/Relay Server": "ID/\u4E2D\u7EE7\u670D\u52A1\u5668",
        "Stop service": "\u505C\u6B62\u670D\u52A1",
        "Change ID": "\u6539\u53D8ID",
        Website: "\u7F51\u7AD9",
        About: "\u5173\u4E8E",
        Mute: "\u9759\u97F3",
        "Audio Input": "\u97F3\u9891\u8F93\u5165",
        "ID Server": "ID\u670D\u52A1\u5668",
        "Relay Server": "\u4E2D\u7EE7\u670D\u52A1\u5668",
        "API Server": "API\u670D\u52A1\u5668",
        invalid_http: "\u5FC5\u987B\u4EE5http://\u6216\u8005https://\u5F00\u5934",
        "Invalid IP": "\u65E0\u6548IP",
        id_change_tip: "\u53EA\u53EF\u4EE5\u4F7F\u7528\u5B57\u6BCDa-z, A-Z, 0-9, _ (\u4E0B\u5212\u7EBF)\u3002\u9996\u5B57\u6BCD\u5FC5\u987B\u662Fa-z, A-Z\u3002\u957F\u5EA6\u57286\u4E0E16\u4E4B\u95F4\u3002",
        "Invalid format": "\u65E0\u6548\u683C\u5F0F",
        "This function is turned off by the server": "\u670D\u52A1\u5668\u5173\u95ED\u4E86\u6B64\u529F\u80FD",
        "Not available": "\u5DF2\u88AB\u5360\u7528",
        "Too frequent": "\u4FEE\u6539\u592A\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5",
        Cancel: "\u53D6\u6D88",
        Skip: "\u8DF3\u8FC7",
        Close: "\u5173\u95ED",
        Retry: "\u518D\u8BD5",
        OK: "\u786E\u8BA4",
        "Password Required": "\u9700\u8981\u5BC6\u7801",
        "Please enter your password": "\u8BF7\u8F93\u5165\u5BC6\u7801",
        "Remember password": "\u8BB0\u4F4F\u5BC6\u7801",
        "Wrong Password": "\u5BC6\u7801\u9519\u8BEF",
        "Do you want to enter again?": "\u8FD8\u60F3\u8F93\u5165\u4E00\u6B21\u5417?",
        "Connection Error": "\u8FDE\u63A5\u9519\u8BEF",
        Error: "\u9519\u8BEF",
        "Reset by the peer": "\u8FDE\u63A5\u88AB\u5BF9\u65B9\u5173\u95ED",
        "Connecting...": "\u6B63\u5728\u8FDE\u63A5...",
        "Connection in progress. Please wait.": "\u8FDE\u63A5\u8FDB\u884C\u4E2D\uFF0C\u8BF7\u7A0D\u7B49\u3002",
        "Please try 1 minute later": "\u4E00\u5206\u949F\u540E\u518D\u8BD5",
        "Login Error": "\u767B\u5F55\u9519\u8BEF",
        Successful: "\u6210\u529F",
        "Connected, waiting for image...": "\u5DF2\u8FDE\u63A5\uFF0C\u7B49\u5F85\u753B\u9762\u4F20\u8F93...",
        Name: "\u540D\u79F0",
        Type: "\u7C7B\u578B",
        Modified: "\u4FEE\u6539\u65F6\u95F4",
        Size: "\u5927\u5C0F",
        "Show Hidden Files": "\u663E\u793A\u9690\u85CF\u6587\u4EF6",
        Receive: "\u63A5\u53D7",
        Send: "\u53D1\u9001",
        "Refresh File": "\u5237\u65B0\u6587\u4EF6",
        Local: "\u672C\u5730",
        Remote: "\u8FDC\u7A0B",
        "Remote Computer": "\u8FDC\u7A0B\u7535\u8111",
        "Local Computer": "\u672C\u5730\u7535\u8111",
        "Confirm Delete": "\u786E\u8BA4\u5220\u9664",
        Delete: "\u5220\u9664",
        Properties: "\u5C5E\u6027",
        "Multi Select": "\u591A\u9009",
        "Empty Directory": "\u7A7A\u6587\u4EF6\u5939",
        "Not an empty directory": "\u8FD9\u4E0D\u662F\u4E00\u4E2A\u7A7A\u6587\u4EF6\u5939",
        "Are you sure you want to delete this file?": "\u662F\u5426\u5220\u9664\u6B64\u6587\u4EF6?",
        "Are you sure you want to delete this empty directory?": "\u662F\u5426\u5220\u9664\u6B64\u7A7A\u6587\u4EF6\u5939?",
        "Are you sure you want to delete the file of this directory?": "\u662F\u5426\u5220\u9664\u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6?",
        "Do this for all conflicts": "\u5E94\u7528\u4E8E\u5176\u5B83\u51B2\u7A81",
        "This is irreversible!": "\u6B64\u64CD\u4F5C\u4E0D\u53EF\u9006\uFF01",
        Deleting: "\u6B63\u5728\u5220\u9664",
        files: "\u6587\u4EF6",
        Waiting: "\u7B49\u5F85...",
        Finished: "\u5B8C\u6210",
        Speed: "\u901F\u5EA6",
        "Custom Image Quality": "\u8BBE\u7F6E\u753B\u9762\u8D28\u91CF",
        "Privacy mode": "\u9690\u79C1\u6A21\u5F0F",
        "Block user input": "\u963B\u6B62\u7528\u6237\u8F93\u5165",
        "Unblock user input": "\u53D6\u6D88\u963B\u6B62\u7528\u6237\u8F93\u5165",
        "Adjust Window": "\u8C03\u8282\u7A97\u53E3",
        Original: "\u539F\u59CB\u6BD4\u4F8B",
        Shrink: "\u6536\u7F29",
        Stretch: "\u4F38\u5C55",
        "Good image quality": "\u597D\u753B\u8D28",
        Balanced: "\u4E00\u822C\u753B\u8D28",
        "Optimize reaction time": "\u4F18\u5316\u53CD\u5E94\u65F6\u95F4",
        Custom: "\u81EA\u5B9A\u4E49\u753B\u8D28",
        "Show remote cursor": "\u663E\u793A\u8FDC\u7A0B\u5149\u6807",
        "Disable clipboard": "\u7981\u6B62\u526A\u8D34\u677F",
        "Lock after session end": "\u65AD\u5F00\u540E\u9501\u5B9A\u8FDC\u7A0B\u7535\u8111",
        Insert: "\u63D2\u5165",
        "Insert Lock": "\u9501\u5B9A\u8FDC\u7A0B\u7535\u8111",
        Refresh: "\u5237\u65B0\u753B\u9762",
        "ID does not exist": "ID\u4E0D\u5B58\u5728",
        "Failed to connect to rendezvous server": "\u8FDE\u63A5\u6CE8\u518C\u670D\u52A1\u5668\u5931\u8D25",
        "Please try later": "\u8BF7\u7A0D\u540E\u518D\u8BD5",
        "Remote desktop is offline": "\u8FDC\u7A0B\u7535\u8111\u4E0D\u5728\u7EBF",
        "Key mismatch": "Key\u4E0D\u5339\u914D",
        Timeout: "\u8FDE\u63A5\u8D85\u65F6",
        "Failed to connect to relay server": "\u65E0\u6CD5\u8FDE\u63A5\u5230\u4E2D\u7EE7\u670D\u52A1\u5668",
        "Failed to connect via rendezvous server": "\u65E0\u6CD5\u901A\u8FC7\u6CE8\u518C\u670D\u52A1\u5668\u5EFA\u7ACB\u8FDE\u63A5",
        "Failed to connect via relay server": "\u65E0\u6CD5\u901A\u8FC7\u4E2D\u7EE7\u670D\u52A1\u5668\u5EFA\u7ACB\u8FDE\u63A5",
        "Failed to make direct connection to remote desktop": "\u65E0\u6CD5\u5EFA\u7ACB\u76F4\u63A5\u8FDE\u63A5",
        "Set Password": "\u8BBE\u7F6E\u5BC6\u7801",
        "OS Password": "\u64CD\u4F5C\u7CFB\u7EDF\u5BC6\u7801",
        install_tip: "\u4F60\u6B63\u5728\u8FD0\u884C\u672A\u5B89\u88C5\u7248\u672C\uFF0C\u7531\u4E8EUAC\u9650\u5236\uFF0C\u4F5C\u4E3A\u88AB\u63A7\u7AEF\uFF0C\u4F1A\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u65E0\u6CD5\u63A7\u5236\u9F20\u6807\u952E\u76D8\uFF0C\u6216\u8005\u5F55\u5236\u5C4F\u5E55\uFF0C\u8BF7\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u5C06RustDesk\u5B89\u88C5\u5230\u7CFB\u7EDF\uFF0C\u4ECE\u800C\u89C4\u907F\u4E0A\u8FF0\u95EE\u9898\u3002",
        "Click to upgrade": "\u70B9\u51FB\u8FD9\u91CC\u5347\u7EA7",
        "Click to download": "\u70B9\u51FB\u8FD9\u91CC\u4E0B\u8F7D",
        "Click to update": "\u70B9\u51FB\u8FD9\u91CC\u66F4\u65B0",
        "Configuration Permissions": "\u914D\u7F6E\u6743\u9650",
        Configure: "\u914D\u7F6E",
        config_acc: '\u4E3A\u4E86\u80FD\u591F\u8FDC\u7A0B\u63A7\u5236\u4F60\u7684\u684C\u9762, \u8BF7\u7ED9\u4E88RustDesk"\u8F85\u52A9\u529F\u80FD" \u6743\u9650\u3002',
        config_screen: '\u4E3A\u4E86\u80FD\u591F\u8FDC\u7A0B\u8BBF\u95EE\u4F60\u7684\u684C\u9762, \u8BF7\u7ED9\u4E88RustDesk"\u5C4F\u5E55\u5F55\u5236" \u6743\u9650\u3002',
        "Installing ...": "\u5B89\u88C5 ...",
        Install: "\u5B89\u88C5",
        Installation: "\u5B89\u88C5",
        "Installation Path": "\u5B89\u88C5\u8DEF\u5F84",
        "Create start menu shortcuts": "\u521B\u5EFA\u542F\u52A8\u83DC\u5355\u5FEB\u6377\u65B9\u5F0F",
        "Create desktop icon": "\u521B\u5EFA\u684C\u9762\u56FE\u6807",
        agreement_tip: "\u5F00\u59CB\u5B89\u88C5\u5373\u8868\u793A\u63A5\u53D7\u8BB8\u53EF\u534F\u8BAE\u3002",
        "Accept and Install": "\u540C\u610F\u5E76\u5B89\u88C5",
        "End-user license agreement": "\u7528\u6237\u534F\u8BAE",
        "Generating ...": "\u6B63\u5728\u4EA7\u751F ...",
        "Your installation is lower version.": "\u4F60\u5B89\u88C5\u7684\u7248\u672C\u6BD4\u5F53\u524D\u8FD0\u884C\u7684\u4F4E\u3002",
        not_close_tcp_tip: "\u8BF7\u5728\u4F7F\u7528\u96A7\u9053\u7684\u65F6\u5019\uFF0C\u4E0D\u8981\u5173\u95ED\u672C\u7A97\u53E3",
        "Listening ...": "\u6B63\u5728\u7B49\u5F85\u96A7\u9053\u8FDE\u63A5 ...",
        "Remote Host": "\u8FDC\u7A0B\u4E3B\u673A",
        "Remote Port": "\u8FDC\u7A0B\u7AEF\u53E3",
        Action: "\u52A8\u4F5C",
        Add: "\u6DFB\u52A0",
        "Local Port": "\u672C\u5730\u7AEF\u53E3",
        setup_server_tip: "\u5982\u679C\u9700\u8981\u66F4\u5FEB\u8FDE\u63A5\u901F\u5EA6\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u81EA\u5EFA\u670D\u52A1\u5668",
        "Too short, at least 6 characters.": "\u592A\u77ED\u4E86\uFF0C\u81F3\u5C116\u4E2A\u5B57\u7B26",
        "The confirmation is not identical.": "\u4E24\u6B21\u8F93\u5165\u4E0D\u5339\u914D",
        Permissions: "\u6743\u9650",
        Accept: "\u63A5\u53D7",
        Dismiss: "\u62D2\u7EDD",
        Disconnect: "\u65AD\u5F00\u8FDE\u63A5",
        "Allow using keyboard and mouse": "\u5141\u8BB8\u4F7F\u7528\u952E\u76D8\u9F20\u6807",
        "Allow using clipboard": "\u5141\u8BB8\u4F7F\u7528\u526A\u8D34\u677F",
        "Allow hearing sound": "\u5141\u8BB8\u542C\u5230\u58F0\u97F3",
        "Allow file transfer": "\u5141\u8BB8\u6587\u4EF6\u4F20\u8F93",
        "File transfer": "\u6587\u4EF6\u4F20\u8F93",
        Connected: "\u5DF2\u7ECF\u8FDE\u63A5",
        "Direct and encrypted connection": "\u52A0\u5BC6\u76F4\u8FDE",
        "Relayed and encrypted connection": "\u52A0\u5BC6\u4E2D\u7EE7\u8FDE\u63A5",
        "Direct and unencrypted connection": "\u975E\u52A0\u5BC6\u76F4\u8FDE",
        "Relayed and unencrypted connection": "\u975E\u52A0\u5BC6\u4E2D\u7EE7\u8FDE\u63A5",
        "Enter Remote ID": "\u8F93\u5165\u5BF9\u65B9ID",
        "Enter your password": "\u8F93\u5165\u5BC6\u7801",
        "Logging in...": "\u6B63\u5728\u767B\u5F55...",
        "Enable RDP session sharing": "\u5141\u8BB8RDP\u4F1A\u8BDD\u5171\u4EAB",
        "Auto Login": "\u81EA\u52A8\u767B\u5F55\uFF08\u8BBE\u7F6E\u65AD\u5F00\u540E\u9501\u5B9A\u624D\u6709\u6548\uFF09",
        "Enable Direct IP Access": "\u5141\u8BB8IP\u76F4\u63A5\u8BBF\u95EE",
        Rename: "\u6539\u540D",
        Space: "\u7A7A\u683C",
        "Create Desktop Shortcut": "\u521B\u5EFA\u684C\u9762\u5FEB\u6377\u65B9\u5F0F",
        "Change Path": "\u6539\u53D8\u8DEF\u5F84",
        "Create Folder": "\u521B\u5EFA\u6587\u4EF6\u5939",
        "Please enter the folder name": "\u8BF7\u8F93\u5165\u6587\u4EF6\u5939\u540D\u79F0",
        "Fix it": "\u4FEE\u590D",
        Warning: "\u8B66\u544A",
        "Login screen using Wayland is not supported": "\u4E0D\u652F\u6301\u4F7F\u7528 Wayland \u767B\u5F55\u754C\u9762",
        "Reboot required": "\u91CD\u542F\u540E\u624D\u80FD\u751F\u6548",
        "Unsupported display server ": "\u4E0D\u652F\u6301\u5F53\u524D\u663E\u793A\u670D\u52A1\u5668",
        "x11 expected": "\u8BF7\u5207\u6362\u5230 x11",
        Port: "\u7AEF\u53E3",
        Settings: "\u8BBE\u7F6E",
        Username: " \u7528\u6237\u540D",
        "Invalid port": "\u65E0\u6548\u7AEF\u53E3",
        "Closed manually by the peer": "\u88AB\u5BF9\u65B9\u624B\u52A8\u5173\u95ED",
        "Enable remote configuration modification": "\u5141\u8BB8\u8FDC\u7A0B\u4FEE\u6539\u914D\u7F6E",
        "Run without install": "\u65E0\u5B89\u88C5\u8FD0\u884C",
        "Always connected via relay": "\u5F3A\u5236\u8D70\u4E2D\u7EE7\u8FDE\u63A5",
        "Always connect via relay": "\u5F3A\u5236\u8D70\u4E2D\u7EE7\u8FDE\u63A5",
        whitelist_tip: "\u53EA\u6709\u767D\u540D\u5355\u91CC\u7684ip\u624D\u80FD\u8BBF\u95EE\u6211",
        Login: "\u767B\u5F55",
        Logout: "\u767B\u51FA",
        Tags: "\u6807\u7B7E",
        "Search ID": "\u67E5\u627EID",
        "Current Wayland display server is not supported": "\u4E0D\u652F\u6301 Wayland \u663E\u793A\u670D\u52A1\u5668",
        whitelist_sep: "\u53EF\u4EE5\u4F7F\u7528\u9017\u53F7\uFF0C\u5206\u53F7\uFF0C\u7A7A\u683C\u6216\u8005\u6362\u884C\u7B26\u4F5C\u4E3A\u5206\u9694\u7B26",
        "Add ID": "\u589E\u52A0ID",
        "Add Tag": "\u589E\u52A0\u6807\u7B7E",
        "Unselect all tags": "\u53D6\u6D88\u9009\u62E9\u6240\u6709\u6807\u7B7E",
        "Network error": "\u7F51\u7EDC\u9519\u8BEF",
        "Username missed": "\u7528\u6237\u540D\u6CA1\u6709\u586B\u5199",
        "Password missed": "\u5BC6\u7801\u6CA1\u6709\u586B\u5199",
        "Wrong credentials": "\u7528\u6237\u540D\u6216\u8005\u5BC6\u7801\u9519\u8BEF",
        "Edit Tag": "\u4FEE\u6539\u6807\u7B7E",
        "Unremember Password": "\u5FD8\u6389\u5BC6\u7801",
        Favorites: "\u6536\u85CF",
        "Add to Favorites": "\u52A0\u5165\u5230\u6536\u85CF",
        "Remove from Favorites": "\u4ECE\u6536\u85CF\u4E2D\u5220\u9664",
        Empty: "\u7A7A\u7A7A\u5982\u4E5F",
        "Invalid folder name": "\u65E0\u6548\u6587\u4EF6\u5939\u540D\u79F0",
        "Socks5 Proxy": "Socks5 \u4EE3\u7406",
        Hostname: "\u4E3B\u673A\u540D",
        Discovered: "\u5DF2\u53D1\u73B0",
        install_daemon_tip: "\u4E3A\u4E86\u5F00\u673A\u542F\u52A8\uFF0C\u8BF7\u5B89\u88C5\u7CFB\u7EDF\u670D\u52A1\u3002",
        "Remote ID": "\u8FDC\u7A0BID",
        Paste: "\u7C98\u8D34",
        "Paste here?": "\u7C98\u8D34\u5230\u8FD9\u91CC?",
        "Are you sure to close the connection?": "\u662F\u5426\u786E\u8BA4\u5173\u95ED\u8FDE\u63A5\uFF1F",
        "Download new version": "\u4E0B\u8F7D\u65B0\u7248\u672C",
        "Touch mode": "\u89E6\u5C4F\u6A21\u5F0F",
        "Mouse mode": "\u9F20\u6807\u6A21\u5F0F",
        "One-Finger Tap": "\u5355\u6307\u8F7B\u89E6",
        "Left Mouse": "\u9F20\u6807\u5DE6\u952E",
        "One-Long Tap": "\u5355\u6307\u957F\u6309",
        "Two-Finger Tap": "\u53CC\u6307\u8F7B\u89E6",
        "Right Mouse": "\u9F20\u6807\u53F3\u952E",
        "One-Finger Move": "\u5355\u6307\u79FB\u52A8",
        "Double Tap & Move": "\u53CC\u51FB\u5E76\u79FB\u52A8",
        "Mouse Drag": "\u9F20\u6807\u9009\u4E2D\u62D6\u52A8",
        "Two-Finger vertically": "\u53CC\u6307\u5782\u76F4\u6ED1\u52A8",
        "Mouse Wheel": "\u9F20\u6807\u6EDA\u8F6E",
        "Two-Finger Move": "\u53CC\u6307\u79FB\u52A8",
        "Canvas Move": "\u79FB\u52A8\u753B\u5E03",
        "Pinch to Zoom": "\u53CC\u6307\u7F29\u653E",
        "Canvas Zoom": "\u7F29\u653E\u753B\u5E03",
        "Reset canvas": "\u91CD\u7F6E\u753B\u5E03",
        "No permission of file transfer": "\u6CA1\u6709\u6587\u4EF6\u4F20\u8F93\u6743\u9650",
        Note: "\u5907\u6CE8",
        Connection: "\u8FDE\u63A5",
        "Share Screen": "\u5171\u4EAB\u5C4F\u5E55",
        CLOSE: "\u5173\u95ED",
        OPEN: "\u5F00\u542F",
        Chat: "\u804A\u5929\u6D88\u606F",
        Total: "\u603B\u8BA1",
        items: "\u4E2A\u9879\u76EE",
        Selected: "\u5DF2\u9009\u62E9",
        "Screen Capture": "\u5C4F\u5E55\u5F55\u5236",
        "Mouse Control": "\u9F20\u6807\u8F93\u5165",
        "File Transfer": "\u6587\u4EF6\u4F20\u8F93",
        "Audio Capture": "\u97F3\u9891\u5F55\u5236",
        "File Connection": "\u6587\u4EF6\u8FDE\u63A5",
        "Screen Connection": "\u5C4F\u5E55\u8FDE\u63A5",
        "Do you accept?": "\u662F\u5426\u63A5\u53D7\uFF1F",
        "Open System Setting": "\u6253\u5F00\u7CFB\u7EDF\u8BBE\u7F6E",
        "How to get Android input permission?": "\u5982\u4F55\u83B7\u53D6\u5B89\u5353\u7684\u8F93\u5165\u6743\u9650\uFF1F",
        android_input_permission_tip1: "\u83B7\u53D6\u8F93\u5165\u6743\u9650\u540E\u53EF\u4EE5\u8BA9\u8FDC\u7A0B\u8BBE\u5907\u901A\u8FC7\u9F20\u6807\u63A7\u5236\u8FD9\u53F0\u5B89\u5353\u8BBE\u5907",
        android_input_permission_tip2: "\u8BF7\u5728\u63A5\u4E0B\u6765\u7684\u7CFB\u7EDF\u8BBE\u7F6E\u9875\u9762\u91CC\uFF0C\u627E\u5230\u5E76\u8FDB\u5165 [\u5DF2\u5B89\u88C5\u7684\u670D\u52A1] \u9875\u9762\uFF0C\u5C06 [RustDesk Input] \u670D\u52A1\u5F00\u542F",
        android_new_connection_tip: "\u6536\u5230\u65B0\u7684\u8FDE\u63A5\u63A7\u5236\u8BF7\u6C42\uFF0C\u5BF9\u65B9\u60F3\u8981\u63A7\u5236\u4F60\u5F53\u524D\u7684\u8BBE\u5907\u3002",
        android_service_will_start_tip: "\u5F00\u542F\u5F55\u5C4F\u6743\u9650\u5C06\u81EA\u52A8\u5F00\u542F\u670D\u52A1\uFF0C\u5141\u8BB8\u5176\u4ED6\u8BBE\u5907\u5411\u6B64\u8BBE\u5907\u8BF7\u6C42\u5EFA\u7ACB\u8FDE\u63A5\u3002",
        android_stop_service_tip: "\u5173\u95ED\u670D\u52A1\u5C06\u81EA\u52A8\u5173\u95ED\u6240\u6709\u5DF2\u5EFA\u7ACB\u7684\u8FDE\u63A5\u3002",
        android_version_audio_tip: "\u5F53\u524D\u5B89\u5353\u7248\u672C\u4E0D\u652F\u6301\u97F3\u9891\u5F55\u5236\uFF0C\u8BF7\u5347\u7EA7\u81F3\u5B89\u535310\u6216\u66F4\u9AD8\u3002",
        android_start_service_tip: "\u70B9\u51FB [\u542F\u52A8\u670D\u52A1] \u6216\u6253\u5F00 [\u5C4F\u5E55\u5F55\u5236] \u6743\u9650\u5F00\u542F\u624B\u673A\u5C4F\u5E55\u5171\u4EAB\u670D\u52A1\u3002",
        Account: "\u8D26\u53F7"
    },
    it: {
        Status: "Stato",
        "Your Desktop": "Il tuo desktop",
        desk_tip: "Puoi accedere al tuo desktop usando l'ID e la password riportati qui.",
        Password: "Password",
        Ready: "Pronto",
        Established: "Stabilito",
        connecting_status: "Connessione alla rete RustDesk in corso...",
        "Enable Service": "Abilita servizio",
        "Start Service": "Avvia servizio",
        "Service is running": "Il servizio \xE8 in esecuzione",
        "Service is not running": "Il servizio non \xE8 in esecuzione",
        not_ready_status: "Non pronto. Verifica la tua connessione",
        "Control Remote Desktop": "Controlla una scrivania remota",
        "Transfer File": "Trasferisci file",
        Connect: "Connetti",
        "Recent Sessions": "Sessioni recenti",
        "Address Book": "Rubrica",
        Confirmation: "Conferma",
        "TCP Tunneling": "Tunnel TCP",
        Remove: "Rimuovi",
        "Refresh random password": "Nuova password casuale",
        "Set your own password": "Imposta la tua password",
        "Enable Keyboard/Mouse": "Abilita tastiera/mouse",
        "Enable Clipboard": "Abilita appunti",
        "Enable File Transfer": "Abilita trasferimento file",
        "Enable TCP Tunneling": "Abilita tunnel TCP",
        "IP Whitelisting": "IP autorizzati",
        "ID/Relay Server": "Server ID/Relay",
        "Stop service": "Arresta servizio",
        "Change ID": "Cambia ID",
        Website: "Sito web",
        About: "Informazioni",
        Mute: "Silenzia",
        "Audio Input": "Input audio",
        "ID Server": "ID server",
        "Relay Server": "Server relay",
        "API Server": "Server API",
        invalid_http: "deve iniziare con http:// o https://",
        "Invalid IP": "Indirizzo IP non valido",
        id_change_tip: "Puoi usare solo i caratteri a-z, A-Z, 0-9 e _ (underscore). Il primo carattere deve essere a-z o A-Z. La lunghezza deve essere fra 6 e 16 caratteri.",
        "Invalid format": "Formato non valido",
        "This function is turned off by the server": "Questa funzione \xE8 disabilitata sul server",
        "Not available": "Non disponibile",
        "Too frequent": "Troppo frequente",
        Cancel: "Annulla",
        Skip: "Ignora",
        Close: "Chiudi",
        Retry: "Riprova",
        OK: "OK",
        "Password Required": "Password richiesta",
        "Please enter your password": "Inserisci la tua password",
        "Remember password": "Ricorda password",
        "Wrong Password": "Password errata",
        "Do you want to enter again?": "Vuoi riprovare?",
        "Connection Error": "Errore di connessione",
        Error: "Errore",
        "Reset by the peer": "Reimpostata dal peer",
        "Connecting...": "Connessione...",
        "Connection in progress. Please wait.": "Connessione in corso. Attendi.",
        "Please try 1 minute later": "Per favore riprova fra 1 minuto",
        "Login Error": "Errore di login",
        Successful: "Successo",
        "Connected, waiting for image...": "Connesso, in attesa dell'immagine...",
        Name: "Nome",
        Type: "Tipo",
        Modified: "Modificato",
        Size: "Dimensione",
        "Show Hidden Files": "Mostra file nascosti",
        Receive: "Ricevi",
        Send: "Invia",
        "Refresh File": "Aggiorna file",
        Local: "Locale",
        Remote: "Remote",
        "Remote Computer": "Computer remoto",
        "Local Computer": "Computer locale",
        "Confirm Delete": "Conferma cancellazione",
        Delete: "Eliminare",
        Properties: "Propriet\xE0",
        "Multi Select": "Selezione multipla",
        "Empty Directory": "Directory vuota",
        "Not an empty directory": "Non una directory vuota",
        "Are you sure you want to delete this file?": "Vuoi davvero eliminare questo file?",
        "Are you sure you want to delete this empty directory?": "Sei sicuro di voler eliminare questa directory vuota?",
        "Are you sure you want to delete the file of this directory?": "Sei sicuro di voler eliminare il file di questa directory?",
        "Do this for all conflicts": "Ricorca questa scelta per tutti i conflitti",
        "This is irreversible!": "Questo \xE8 irreversibile!",
        Deleting: "Cancellazione di",
        files: "file",
        Waiting: "In attesa",
        Finished: "Terminato",
        Speed: "Velocit\xE0",
        "Custom Image Quality": "Qualit\xE0 immagine personalizzata",
        "Privacy mode": "Modalit\xE0 privacy",
        "Block user input": "Blocca l'input dell'utente",
        "Unblock user input": "Sbloccare l'input dell'utente",
        "Adjust Window": "Adatta la finestra",
        Original: "Originale",
        Shrink: "Restringi",
        Stretch: "Allarga",
        "Good image quality": "Buona qualit\xE0 immagine",
        Balanced: "Bilanciato",
        "Optimize reaction time": "Ottimizza il tempo di reazione",
        Custom: "Personalizzato",
        "Show remote cursor": "Mostra il cursore remoto",
        "Disable clipboard": "Disabilita appunti",
        "Lock after session end": "Blocca al termine della sessione",
        Insert: "Inserisci",
        "Insert Lock": "Blocco inserimento",
        Refresh: "Aggiorna",
        "ID does not exist": "L'ID non esiste",
        "Failed to connect to rendezvous server": "Errore di connessione al server rendezvous",
        "Please try later": "Riprova pi\xF9 tardi",
        "Remote desktop is offline": "Il desktop remoto \xE8 offline",
        "Key mismatch": "La chiave non corrisponde",
        Timeout: "Timeout",
        "Failed to connect to relay server": "Errore di connessione al server relay",
        "Failed to connect via rendezvous server": "Errore di connessione tramite il server rendezvous",
        "Failed to connect via relay server": "Errore di connessione tramite il server relay",
        "Failed to make direct connection to remote desktop": "Impossibile connettersi direttamente al desktop remoto",
        "Set Password": "Imposta password",
        "OS Password": "Password del sistema operativo",
        install_tip: "A causa del Controllo Account Utente, RustDesk potrebbe non funzionare correttamente come desktop remoto. Per evitare questo problema, fai click sul tasto qui sotto per installare RustDesk a livello di sistema.",
        "Click to upgrade": "Fai click per aggiornare",
        "Click to download": "Cliquez per scaricare",
        "Click to update": "Fare clic per aggiornare",
        "Configuration Permissions": "Permessi di configurazione",
        Configure: "Configura",
        config_acc: `Per controllare il tuo desktop dall'esterno, devi fornire a RustDesk il permesso "Accessibilit\xE0".`,
        config_screen: `Per controllare il tuo desktop dall'esterno, devi fornire a RustDesk il permesso "Registrazione schermo".`,
        "Installing ...": "Installazione ...",
        Install: "Installa",
        Installation: "Installazione",
        "Installation Path": "Percorso di installazione",
        "Create start menu shortcuts": "Crea i collegamenti nel menu di avvio",
        "Create desktop icon": "Crea un'icona sul desktop",
        agreement_tip: "Avviando l'installazione, accetti i termini del contratto di licenza.",
        "Accept and Install": "Accetta e installa",
        "End-user license agreement": "Contratto di licenza con l'utente finale",
        "Generating ...": "Generazione ...",
        "Your installation is lower version.": "La tua installazione non \xE8 aggiornata.",
        not_close_tcp_tip: "Non chiudere questa finestra mentre stai usando il tunnel",
        "Listening ...": "In ascolto ...",
        "Remote Host": "Host remoto",
        "Remote Port": "Porta remota",
        Action: "Azione",
        Add: "Aggiungi",
        "Local Port": "Porta locale",
        setup_server_tip: "Per una connessione pi\xF9 veloce, configura un tuo server",
        "Too short, at least 6 characters.": "Troppo breve, almeno 6 caratteri",
        "The confirmation is not identical.": "La conferma non corrisponde",
        Permissions: "Permessi",
        Accept: "Accetta",
        Dismiss: "Rifiuta",
        Disconnect: "Disconnetti",
        "Allow using keyboard and mouse": "Consenti l'uso di tastiera e mouse",
        "Allow using clipboard": "Consenti l'uso degli appunti",
        "Allow hearing sound": "Consenti la riproduzione dell'audio",
        "Allow file transfer": "Consenti trasferimento file",
        "File transfer": "Trasferimento di file",
        Connected: "Connesso",
        "Direct and encrypted connection": "Connessione diretta e cifrata",
        "Relayed and encrypted connection": "Connessione tramite relay e cifrata",
        "Direct and unencrypted connection": "Connessione diretta e non cifrata",
        "Relayed and unencrypted connection": "Connessione tramite relay e non cifrata",
        "Enter Remote ID": "Inserisci l'ID remoto",
        "Enter your password": "Inserisci la tua password",
        "Logging in...": "Autenticazione...",
        "Enable RDP session sharing": "Abilita la condivisione della sessione RDP",
        "Auto Login": "Login automatico",
        "Enable Direct IP Access": "Abilita l'accesso diretto tramite IP",
        Rename: "Rinomina",
        Space: "Spazio",
        "Create Desktop Shortcut": "Crea collegamento sul desktop",
        "Change Path": "Cambia percorso",
        "Create Folder": "Crea cartella",
        "Please enter the folder name": "Inserisci il nome della cartella",
        "Fix it": "Risolvi",
        Warning: "Avviso",
        "Login screen using Wayland is not supported": "La schermata di login non \xE8 supportata utilizzando Wayland",
        "Reboot required": "Riavvio necessario",
        "Unsupported display server ": "Display server non supportato",
        "x11 expected": "x11 necessario",
        Port: "Porta",
        Settings: "Impostazioni",
        Username: " Nome utente",
        "Invalid port": "Porta non valida",
        "Closed manually by the peer": "Chiuso manualmente dal peer",
        "Enable remote configuration modification": "Abilita la modifica remota della configurazione",
        "Run without install": "Avvia senza installare",
        "Always connected via relay": "Connesso sempre tramite relay",
        "Always connect via relay": "Connetti sempre tramite relay",
        whitelist_tip: "Solo gli indirizzi IP autorizzati possono connettersi a questo desktop",
        Login: "Accedi",
        Logout: "Esci",
        Tags: "Tag",
        "Search ID": "Cerca ID",
        "Current Wayland display server is not supported": "Questo display server Wayland non \xE8 supportato",
        whitelist_sep: "Separati da virgola, punto e virgola, spazio o a capo",
        "Add ID": "Aggiungi ID",
        "Add Tag": "Aggiungi tag",
        "Unselect all tags": "Deseleziona tutti i tag",
        "Network error": "Errore di rete",
        "Username missed": "Nome utente dimenticato",
        "Password missed": "Password dimenticata",
        "Wrong credentials": "Credenziali errate",
        "Edit Tag": "Modifica tag",
        "Unremember Password": "Non ricordare la password",
        Favorites: "Preferiti",
        "Add to Favorites": "Aggiungi ai preferiti",
        "Remove from Favorites": "Rimuovi dai preferiti",
        Empty: "Vuoto",
        "Invalid folder name": "Nome della cartella non valido",
        "Socks5 Proxy": "Socks5 Proxy",
        Hostname: "Nome host",
        Discovered: "Scoperto",
        install_daemon_tip: "Per iniziare all'avvio, \xE8 necessario installare il servizio di sistema.",
        "Remote ID": "ID remoto",
        Paste: "Impasto",
        "Paste here?": "Incolla qui?",
        "Are you sure to close the connection?": "Sei sicuro di chiudere la connessione?",
        "Download new version": "Scarica nuova versione",
        "Touch mode": "Modalit\xE0 tocco",
        "Mouse mode": "Modalit\xE0 mouse",
        "One-Finger Tap": "Tocca con un dito",
        "Left Mouse": "Mouse sinistro",
        "One-Long Tap": "Tocco lungo con un dito",
        "Two-Finger Tap": "Tocca con due dita",
        "Right Mouse": "Mouse destro",
        "One-Finger Move": "Movimento con un dito",
        "Double Tap & Move": "Tocca due volte e sposta",
        "Mouse Drag": "Trascina il mouse",
        "Two-Finger vertically": "Due dita in verticale",
        "Mouse Wheel": "Rotellina del mouse",
        "Two-Finger Move": "Movimento con due dita",
        "Canvas Move": "Sposta tela",
        "Pinch to Zoom": "Pizzica per zoomare",
        "Canvas Zoom": "Zoom tela",
        "Reset canvas": "Ripristina tela",
        "No permission of file transfer": "Nessun permesso di trasferimento di file",
        Note: "Nota",
        Connection: "Connessione",
        "Share Screen": "Condividi schermo",
        CLOSE: "CHIUDERE",
        OPEN: "APRIRE",
        Chat: "Chiacchierata",
        Total: "Totale",
        items: "Oggetti",
        Selected: "Selezionato",
        "Screen Capture": "Cattura schermo",
        "Mouse Control": "Controllo del mouse",
        "File Transfer": "Trasferimento di file",
        "Audio Capture": "Acquisizione audio",
        "File Connection": "Connessione file",
        "Screen Connection": "Connessione schermo",
        "Do you accept?": "Accetti?",
        "Open System Setting": "Apri Impostazioni di sistema",
        "How to get Android input permission?": "Come ottenere l'autorizzazione di input Android?",
        android_input_permission_tip1: "Dopo aver ottenuto l'autorizzazione di input, il dispositivo remoto pu\xF2 controllare questo dispositivo Android tramite il mouse",
        android_input_permission_tip2: "Vai alla pagina delle impostazioni di sistema successiva, trova e accedi a [Servizi installati], attiva il servizio [RustDesk Input]",
        android_new_connection_tip: "\xC8 stata ricevuta una nuova richiesta di controllo, desidera controllare il dispositivo corrente.",
        android_service_will_start_tip: "L'attivazione di Cattura schermo avvier\xE0 automaticamente il servizio, consentendo ad altri dispositivi di richiedere una connessione da questo dispositivo.",
        android_stop_service_tip: "La chiusura del servizio chiuder\xE0 automaticamente tutte le connessioni stabilite.",
        android_version_audio_tip: "L'attuale versione di Android non supporta l'acquisizione audio, esegui l'upgrade ad Android 10 o versioni successive.",
        android_start_service_tip: "Toccare [Avvia servizio] o APRI l'autorizzazione [Cattura schermo] per avviare il servizio di condivisione dello schermo.",
        Account: "Account"
    },
    tw: {
        Status: "\u72C0\u614B",
        "Your Desktop": "\u60A8\u7684\u684C\u9762",
        desk_tip: "\u60A8\u53EF\u4EE5\u900F\u904E\u6B64 ID \u53CA\u5BC6\u78BC\u5B58\u53D6\u60A8\u7684\u684C\u9762",
        Password: "\u5BC6\u78BC",
        Ready: "\u5C31\u7DD2",
        Established: "\u5DF2\u5EFA\u7ACB",
        connecting_status: "\u6B63\u5728\u9023\u63A5\u81F3 RustDesk \u7DB2\u8DEF...",
        "Enable Service": "\u555F\u7528\u670D\u52D9",
        "Start Service": "\u555F\u52D5\u670D\u52D9",
        "Service is running": "\u670D\u52D9\u6B63\u5728\u904B\u884C",
        "Service is not running": "\u670D\u52D9\u5C1A\u672A\u57F7\u884C",
        not_ready_status: "\u5C1A\u672A\u5C31\u7DD2\u3002\u8ACB\u6AA2\u67E5\u60A8\u7684\u7DB2\u8DEF\u9023\u7DDA",
        "Control Remote Desktop": "\u63A7\u5236\u9060\u7AEF\u684C\u9762",
        "Transfer File": "\u50B3\u8F38\u6A94\u6848",
        Connect: "\u9023\u63A5",
        "Recent Sessions": "\u8FD1\u671F\u7684\u5DE5\u4F5C\u968E\u6BB5",
        "Address Book": "\u901A\u8A0A\u9304",
        Confirmation: "\u78BA\u8A8D",
        "TCP Tunneling": "TCP \u901A\u9053",
        Remove: "\u79FB\u9664",
        "Refresh random password": "\u91CD\u65B0\u7522\u751F\u96A8\u6A5F\u5BC6\u78BC",
        "Set your own password": "\u81EA\u884C\u8A2D\u7F6E\u5BC6\u78BC",
        "Enable Keyboard/Mouse": "\u555F\u7528\u9375\u76E4/\u6ED1\u9F20",
        "Enable Clipboard": "\u555F\u7528\u526A\u8CBC\u7C3F",
        "Enable File Transfer": "\u555F\u7528\u6A94\u6848\u50B3\u8F38",
        "Enable TCP Tunneling": "\u555F\u7528 TCP \u901A\u9053",
        "IP Whitelisting": "IP \u767D\u540D\u55AE",
        "ID/Relay Server": "ID/\u8F49\u9001\u4F3A\u670D\u5668",
        "Stop service": "\u505C\u6B62\u670D\u52D9",
        "Change ID": "\u66F4\u6539 ID",
        Website: "\u7DB2\u7AD9",
        About: "\u95DC\u65BC",
        Mute: "\u975C\u97F3",
        "Audio Input": "\u97F3\u8A0A\u8F38\u5165",
        "ID Server": "ID \u4F3A\u670D\u5668",
        "Relay Server": "\u8F49\u9001\u4F3A\u670D\u5668",
        "API Server": "API \u4F3A\u670D\u5668",
        invalid_http: "\u958B\u982D\u5FC5\u9808\u70BA http:// \u6216 https://",
        "Invalid IP": "IP \u7121\u6548",
        id_change_tip: "\u50C5\u80FD\u4F7F\u7528\u4EE5\u4E0B\u5B57\u5143\uFF1Aa-z\u3001A-Z\u30010-9\u3001_ (\u5E95\u7DDA)\u3002\u9996\u5B57\u5143\u5FC5\u9808\u70BA a-z \u6216 A-Z\u3002\u9577\u5EA6\u4ECB\u65BC 6 \u5230 16 \u4E4B\u9593\u3002",
        "Invalid format": "\u683C\u5F0F\u7121\u6548",
        "This function is turned off by the server": "\u6B64\u529F\u80FD\u5DF2\u88AB\u4F3A\u670D\u5668\u505C\u7528",
        "Not available": "\u7121\u6CD5\u4F7F\u7528",
        "Too frequent": "\u4FEE\u6539\u904E\u65BC\u983B\u7E41\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002",
        Cancel: "\u53D6\u6D88",
        Skip: "\u8DF3\u904E",
        Close: "\u95DC\u9589",
        Retry: "\u91CD\u8A66",
        OK: "\u78BA\u5B9A",
        "Password Required": "\u9700\u8981\u5BC6\u78BC",
        "Please enter your password": "\u8ACB\u8F38\u5165\u60A8\u7684\u5BC6\u78BC",
        "Remember password": "\u8A18\u4F4F\u5BC6\u78BC",
        "Wrong Password": "\u5BC6\u78BC\u932F\u8AA4",
        "Do you want to enter again?": "\u60A8\u8981\u91CD\u65B0\u8F38\u5165\u55CE\uFF1F",
        "Connection Error": "\u9023\u7DDA\u932F\u8AA4",
        Error: "\u932F\u8AA4",
        "Reset by the peer": "\u5C0D\u65B9\u91CD\u7F6E\u4E86\u9023\u7DDA",
        "Connecting...": "\u6B63\u5728\u9023\u63A5...",
        "Connection in progress. Please wait.": "\u6B63\u5728\u9023\u63A5\uFF0C\u8ACB\u7A0D\u5019\u3002",
        "Please try 1 minute later": "\u8ACB\u65BC 1 \u5206\u9418\u5F8C\u518D\u8A66",
        "Login Error": "\u767B\u5165\u932F\u8AA4",
        Successful: "\u6210\u529F",
        "Connected, waiting for image...": "\u5DF2\u9023\u7DDA\uFF0C\u7B49\u5F85\u756B\u9762\u50B3\u8F38...",
        Name: "\u540D\u7A31",
        Type: "\u985E\u578B",
        Modified: "\u4FEE\u6539\u6642\u9593",
        Size: "\u5927\u5C0F",
        "Show Hidden Files": "\u986F\u793A\u96B1\u85CF\u6A94\u6848",
        Receive: "\u63A5\u6536",
        Send: "\u50B3\u9001",
        "Refresh File": "\u5237\u65B0\u6587\u4EF6",
        Local: "\u672C\u5730",
        Remote: "\u9060\u7AEF",
        "Remote Computer": "\u9060\u7AEF\u96FB\u8166",
        "Local Computer": "\u672C\u5730\u96FB\u8166",
        "Confirm Delete": "\u78BA\u8A8D\u522A\u9664",
        Delete: "\u522A\u9664",
        Properties: "\u5C6C\u6027",
        "Multi Select": "\u591A\u9078",
        "Empty Directory": "\u7A7A\u6587\u4EF6\u593E",
        "Not an empty directory": "\u4E0D\u662F\u4E00\u500B\u7A7A\u6587\u4EF6\u593E",
        "Are you sure you want to delete this file?": "\u60A8\u78BA\u5B9A\u8981\u522A\u9664\u6B64\u6A94\u6848\u55CE\uFF1F",
        "Are you sure you want to delete this empty directory?": "\u60A8\u78BA\u5B9A\u8981\u522A\u9664\u6B64\u7A7A\u6587\u4EF6\u593E?",
        "Are you sure you want to delete the file of this directory?": "\u60A8\u78BA\u5B9A\u8981\u522A\u9664\u6587\u4EF6\u593E\u4E0B\u7684\u6587\u4EF6?",
        "Do this for all conflicts": "\u5957\u7528\u5230\u5176\u4ED6\u885D\u7A81",
        "This is irreversible!": "\u6B64\u64CD\u4F5C\u4E0D\u53EF\u9006\uFF01",
        Deleting: "\u6B63\u5728\u522A\u9664",
        files: "\u6A94\u6848",
        Waiting: "\u6B63\u5728\u7B49\u5019...",
        Finished: "\u5DF2\u5B8C\u6210",
        Speed: "\u901F\u5EA6",
        "Custom Image Quality": "\u81EA\u8A02\u5716\u7247\u54C1\u8CEA",
        "Privacy mode": "\u96B1\u79C1\u6A21\u5F0F",
        "Block user input": "\u5C01\u9396\u4F7F\u7528\u8005\u8F38\u5165",
        "Unblock user input": "\u53D6\u6D88\u5C01\u9396\u4F7F\u7528\u8005\u8F38\u5165",
        "Adjust Window": "\u8ABF\u6574\u8996\u7A97",
        Original: "\u539F\u59CB",
        Shrink: "\u7E2E\u6E1B",
        Stretch: "\u5EF6\u5C55",
        "Good image quality": "\u756B\u9762\u54C1\u8CEA\u826F\u597D",
        Balanced: "\u5E73\u8861",
        "Optimize reaction time": "\u56DE\u61C9\u901F\u5EA6\u6700\u4F73\u5316",
        Custom: "\u81EA\u8A02",
        "Show remote cursor": "\u986F\u793A\u9060\u7AEF\u6E38\u6A19",
        "Disable clipboard": "\u505C\u7528\u526A\u8CBC\u7C3F",
        "Lock after session end": "\u5DE5\u4F5C\u968E\u6BB5\u7D50\u675F\u5F8C\u9396\u5B9A\u96FB\u8166",
        Insert: "\u63D2\u5165",
        "Insert Lock": "\u9396\u5B9A\u9060\u7AEF\u96FB\u8166",
        Refresh: "\u91CD\u65B0\u8F09\u5165",
        "ID does not exist": "ID \u4E0D\u5B58\u5728",
        "Failed to connect to rendezvous server": "\u7121\u6CD5\u9023\u63A5\u81F3 rendezvous \u4F3A\u670D\u5668",
        "Please try later": "\u8ACB\u7A0D\u5019\u518D\u8A66",
        "Remote desktop is offline": "\u9060\u7AEF\u96FB\u8166\u96E2\u7DDA",
        "Key mismatch": "\u91D1\u9470\u4E0D\u7B26",
        Timeout: "\u903E\u6642",
        "Failed to connect to relay server": "\u7121\u6CD5\u9023\u63A5\u81F3\u8F49\u9001\u4F3A\u670D\u5668",
        "Failed to connect via rendezvous server": "\u7121\u6CD5\u900F\u904E rendezvous \u4F3A\u670D\u5668\u9023\u63A5",
        "Failed to connect via relay server": "\u7121\u6CD5\u900F\u904E\u8F49\u9001\u4F3A\u670D\u5668\u9023\u63A5",
        "Failed to make direct connection to remote desktop": "\u7121\u6CD5\u76F4\u63A5\u9023\u7DDA\u81F3\u9060\u7AEF\u96FB\u8166",
        "Set Password": "\u8A2D\u7F6E\u5BC6\u78BC",
        "OS Password": "\u4F5C\u696D\u7CFB\u7D71\u5BC6\u78BC",
        install_tip: "UAC \u6703\u5C0E\u81F4 RustDesk \u5728\u67D0\u4E9B\u60C5\u6CC1\u4E0B\u7121\u6CD5\u6B63\u5E38\u4EE5\u9060\u7AEF\u96FB\u8166\u904B\u4F5C\u3002\u82E5\u8981\u907F\u958B UAC\uFF0C\u8ACB\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u5C07 RustDesk \u5B89\u88DD\u5230\u7CFB\u7D71\u4E2D\u3002",
        "Click to upgrade": "\u9EDE\u64CA\u4EE5\u5347\u7D1A",
        "Click to download": "\u9EDE\u64CA\u4EE5\u4E0B\u8F09",
        "Click to update": "\u9EDE\u64CA\u4EE5\u66F4\u65B0",
        "Configuration Permissions": "\u8A2D\u5B9A\u6B0A\u9650",
        Configure: "\u8A2D\u5B9A",
        config_acc: "\u60A8\u9700\u8981\u6388\u4E88 RustDesk \uFF62\u5354\u52A9\u5DE5\u5177\u300D \u6B0A\u9650\u624D\u80FD\u9060\u7AEF\u5B58\u53D6\u96FB\u8166\u3002",
        config_screen: "\u60A8\u9700\u8981\u6388\u4E88 RustDesk \uFF62\u756B\u9762\u9304\u88FD\u300D \u6B0A\u9650\u624D\u80FD\u9060\u7AEF\u5B58\u53D6\u96FB\u8166\u3002",
        "Installing ...": "\u6B63\u5728\u5B89\u88DD...",
        Install: "\u5B89\u88DD",
        Installation: "\u5B89\u88DD",
        "Installation Path": "\u5B89\u88DD\u8DEF\u5F91",
        "Create start menu shortcuts": "\u5EFA\u7ACB\u958B\u59CB\u9078\u55AE\u6377\u5F91",
        "Create desktop icon": "\u5EFA\u7ACB\u684C\u9762\u5716\u793A",
        agreement_tip: "",
        "Accept and Install": "\u63A5\u53D7\u4E26\u5B89\u88DD",
        "End-user license agreement": "\u4F7F\u7528\u8005\u6388\u6B0A\u5408\u7D04",
        "Generating ...": "\u6B63\u5728\u7522\u751F ...",
        "Your installation is lower version.": "\u60A8\u7684\u5B89\u88DD\u7248\u672C\u904E\u820A\u3002",
        not_close_tcp_tip: "\u4F7F\u7528\u901A\u9053\u6642\u8ACB\u4E0D\u8981\u95DC\u9589\u6B64\u8996\u7A97",
        "Listening ...": "\u6B63\u5728\u7B49\u5F85\u901A\u9053\u9023\u63A5...",
        "Remote Host": "\u9060\u7AEF\u4E3B\u6A5F",
        "Remote Port": "\u9060\u7AEF\u9023\u63A5\u57E0",
        Action: "\u64CD\u4F5C",
        Add: "\u65B0\u589E",
        "Local Port": "\u672C\u6A5F\u9023\u63A5\u57E0",
        setup_server_tip: "\u82E5\u60A8\u9700\u8981\u66F4\u5FEB\u7684\u9023\u63A5\u901F\u5EA6\uFF0C\u53EF\u4EE5\u9078\u64C7\u81EA\u884C\u5EFA\u7ACB\u4F3A\u670D\u5668",
        "Too short, at least 6 characters.": "\u904E\u77ED\uFF0C\u81F3\u5C11\u9700 6 \u500B\u5B57\u5143\u3002",
        "The confirmation is not identical.": "\u5169\u6B21\u8F38\u5165\u4E0D\u76F8\u7B26",
        Permissions: "\u6B0A\u9650",
        Accept: "\u63A5\u53D7",
        Dismiss: "\u95DC\u9589",
        Disconnect: "\u65B7\u958B\u9023\u7DDA",
        "Allow using keyboard and mouse": "\u5141\u8A31\u4F7F\u7528\u9375\u76E4\u548C\u6ED1\u9F20",
        "Allow using clipboard": "\u5141\u8A31\u4F7F\u7528\u526A\u8CBC\u7C3F",
        "Allow hearing sound": "\u5141\u8A31\u5206\u4EAB\u97F3\u8A0A",
        "Allow file transfer": "\u5141\u8A31\u6587\u4EF6\u50B3\u8F38",
        "File transfer": "\u6587\u4EF6\u50B3\u8F38",
        Connected: "\u5DF2\u9023\u63A5",
        "Direct and encrypted connection": "\u52A0\u5BC6\u76F4\u63A5\u9023\u7DDA",
        "Relayed and encrypted connection": "\u52A0\u5BC6\u8F49\u9001\u9023\u7DDA",
        "Direct and unencrypted connection": "\u672A\u52A0\u5BC6\u76F4\u63A5\u9023\u7DDA",
        "Relayed and unencrypted connection": "\u672A\u52A0\u5BC6\u8F49\u9001\u9023\u7DDA",
        "Enter Remote ID": "\u8F38\u5165\u9060\u7AEF ID",
        "Enter your password": "\u8F38\u5165\u60A8\u7684\u5BC6\u78BC",
        "Logging in...": "\u6B63\u5728\u767B\u5165...",
        "Enable RDP session sharing": "\u555F\u7528 RDP \u5DE5\u4F5C\u968E\u6BB5\u5171\u4EAB",
        "Auto Login": "\u81EA\u52D5\u767B\u5165 (\u9396\u5B9A\u5C07\u5728\u8A2D\u5B9A\u95DC\u9589\u5F8C\u5957\u7528)",
        "Enable Direct IP Access": "\u5141\u8A31 IP \u76F4\u63A5\u5B58\u53D6",
        Rename: "\u91CD\u65B0\u547D\u540D",
        Space: "\u7A7A\u767D",
        "Create Desktop Shortcut": "\u5EFA\u7ACB\u684C\u9762\u6377\u5F91",
        "Change Path": "\u66F4\u6539\u8DEF\u5F91",
        "Create Folder": "\u5EFA\u7ACB\u8CC7\u6599\u593E",
        "Please enter the folder name": "\u8ACB\u8F38\u5165\u8CC7\u6599\u593E\u540D\u7A31",
        "Fix it": "\u4FEE\u5FA9",
        Warning: "\u8B66\u544A",
        "Login screen using Wayland is not supported": "\u4E0D\u652F\u63F4\u4F7F\u7528 Wayland \u7684\u767B\u5165\u756B\u9762",
        "Reboot required": "\u9700\u8981\u91CD\u65B0\u555F\u52D5",
        "Unsupported display server ": "\u4E0D\u652F\u63F4\u986F\u793A\u4F3A\u670D\u5668",
        "x11 expected": "\u9810\u671F x11",
        Port: "\u9023\u63A5\u57E0",
        Settings: "\u8A2D\u5B9A",
        Username: " \u4F7F\u7528\u8005\u540D\u7A31",
        "Invalid port": "\u9023\u63A5\u57E0\u7121\u6548",
        "Closed manually by the peer": "\u7531\u5C0D\u65B9\u624B\u52D5\u95DC\u9589",
        "Enable remote configuration modification": "\u555F\u7528\u9060\u7AEF\u66F4\u6539\u8A2D\u5B9A",
        "Run without install": "\u8DF3\u904E\u5B89\u88DD\u76F4\u63A5\u57F7\u884C",
        "Always connected via relay": "\u4E00\u5F8B\u900F\u904E\u8F49\u9001\u9023\u7DDA",
        "Always connect via relay": "\u4E00\u5F8B\u900F\u904E\u8F49\u9001\u9023\u7DDA",
        whitelist_tip: "\u53EA\u6709\u767D\u540D\u55AE\u4E2D\u7684 IP \u53EF\u4EE5\u5B58\u53D6",
        Login: "\u767B\u5165",
        Logout: "\u767B\u51FA",
        Tags: "\u6A19\u7C64",
        "Search ID": "\u641C\u5C0B ID",
        "Current Wayland display server is not supported": "\u76EE\u524D\u4E0D\u652F\u63F4 Wayland \u986F\u793A\u4F3A\u670D\u5668",
        whitelist_sep: "\u4F7F\u7528\u9017\u865F\u3001\u5206\u865F\u3001\u7A7A\u767D\uFF0C\u6216\u662F\u63DB\u884C\u4F86\u5206\u9694",
        "Add ID": "\u65B0\u589E ID",
        "Add Tag": "\u65B0\u589E\u6A19\u7C64",
        "Unselect all tags": "\u53D6\u6D88\u9078\u53D6\u6240\u6709\u6A19\u7C64",
        "Network error": "\u7DB2\u8DEF\u932F\u8AA4",
        "Username missed": "\u7F3A\u5C11\u4F7F\u7528\u8005\u540D\u7A31",
        "Password missed": "\u7F3A\u5C11\u5BC6\u78BC",
        "Wrong credentials": "\u63D0\u4F9B\u7684\u767B\u5165\u8CC7\u8A0A\u6709\u8AA4",
        "Edit Tag": "\u7DE8\u8F2F\u6A19\u7C64",
        "Unremember Password": "\u5FD8\u6389\u5BC6\u78BC",
        Favorites: "\u6536\u85CF",
        "Add to Favorites": "\u52A0\u5165\u5230\u6536\u85CF",
        "Remove from Favorites": "\u5F9E\u6536\u85CF\u4E2D\u522A\u9664",
        Empty: "\u7A7A\u7A7A\u5982\u4E5F",
        "Invalid folder name": "\u8CC7\u6599\u593E\u540D\u7A31\u7121\u6548",
        "Socks5 Proxy": "Socks5 \u4EE3\u7406",
        Hostname: "\u4E3B\u6A5F\u540D\u7A31",
        Discovered: "\u5DF2\u767C\u73FE",
        install_daemon_tip: "\u70BA\u4E86\u958B\u6A5F\u555F\u52D5\uFF0C\u8ACB\u5B89\u88DD\u7CFB\u7D71\u670D\u52D9\u3002",
        "Remote ID": "\u9060\u7AEF ID",
        Paste: "\u8CBC\u4E0A",
        "Paste here?": "\u8CBC\u4E0A\u5230\u9019\u88E1?",
        "Are you sure to close the connection?": "\u60A8\u78BA\u5B9A\u8981\u95DC\u9589\u9023\u7DDA\u55CE\uFF1F",
        "Download new version": "\u4E0B\u8F09\u65B0\u7248\u672C",
        "Touch mode": "\u89F8\u63A7\u6A21\u5F0F",
        "Mouse mode": "\u9F20\u6A19\u6A21\u5F0F",
        "One-Finger Tap": "\u55AE\u6307\u8F15\u89F8",
        "Left Mouse": "\u9F20\u6A19\u5DE6\u9375",
        "One-Long Tap": "\u55AE\u6307\u9577\u6309",
        "Two-Finger Tap": "\u96D9\u6307\u8F15\u89F8",
        "Right Mouse": "\u9F20\u6A19\u53F3\u9375",
        "One-Finger Move": "\u55AE\u6307\u79FB\u52D5",
        "Double Tap & Move": "\u96D9\u64CA\u4E26\u79FB\u52D5",
        "Mouse Drag": "\u9F20\u6A19\u9078\u4E2D\u62D6\u52D5",
        "Two-Finger vertically": "\u96D9\u6307\u5782\u76F4\u6ED1\u52D5",
        "Mouse Wheel": "\u9F20\u6A19\u6EFE\u8F2A",
        "Two-Finger Move": "\u96D9\u6307\u79FB\u52D5",
        "Canvas Move": "\u79FB\u52D5\u756B\u5E03",
        "Pinch to Zoom": "\u96D9\u6307\u7E2E\u653E",
        "Canvas Zoom": "\u7E2E\u653E\u756B\u5E03",
        "Reset canvas": "\u91CD\u7F6E\u756B\u5E03",
        "No permission of file transfer": "\u7121\u6587\u4EF6\u50B3\u8F38\u6B0A\u9650",
        Note: "\u5099\u8A3B",
        Connection: "\u9023\u63A5",
        "Share Screen": "\u5C4F\u5E55\u9304\u88FD",
        CLOSE: "\u95DC\u9589",
        OPEN: "\u958B\u555F",
        Chat: "\u804A\u5929\u6D88\u606F",
        Total: "\u7E3D\u8A08",
        items: "\u500B\u9805\u76EE",
        Selected: "\u5DF2\u9078\u64C7",
        "Screen Capture": "\u5C4F\u5E55\u9304\u88FD",
        "Mouse Control": "\u9F20\u6A19\u8F38\u5165",
        "File Transfer": "\u6587\u4EF6\u50B3\u8F38",
        "Audio Capture": "\u97F3\u983B\u9304\u88FD",
        "File Connection": "\u6587\u4EF6\u9023\u63A5",
        "Screen Connection": "\u5C4F\u5E55\u9023\u63A5",
        "Do you accept?": "\u662F\u5426\u63A5\u53D7\uFF1F",
        "Open System Setting": "\u6253\u958B\u7CFB\u7D71\u8A2D\u7F6E",
        "How to get Android input permission?": "\u5982\u4F55\u7372\u53D6\u5B89\u5353\u7684\u8F38\u5165\u6B0A\u9650\uFF1F",
        android_input_permission_tip1: "\u7372\u53D6\u8F38\u5165\u6B0A\u9650\u5F8C\u53EF\u4EE5\u8B93\u9060\u7A0B\u8A2D\u5099\u901A\u904E\u9F20\u6A19\u63A7\u5236\u9019\u53F0\u5B89\u5353\u8A2D\u5099",
        android_input_permission_tip2: "\u8ACB\u5728\u63A5\u4E0B\u4F86\u7684\u7CFB\u7D71\u8A2D\u7F6E\u9801\u9762\u88E1\uFF0C\u627E\u5230\u4E26\u9032\u5165 [\u5DF2\u5B89\u88DD\u7684\u670D\u52D9] \u9801\u9762\uFF0C\u5C07 [RustDesk Input] \u670D\u52D9\u958B\u555F",
        android_new_connection_tip: "\u6536\u5230\u65B0\u7684\u9023\u63A5\u63A7\u5236\u8ACB\u6C42\uFF0C\u5C0D\u65B9\u60F3\u8981\u63A7\u5236\u4F60\u7576\u524D\u7684\u8A2D\u5099",
        android_service_will_start_tip: "\u958B\u555F\u9304\u5C4F\u6B0A\u9650\u5C07\u81EA\u52D5\u958B\u555F\u670D\u52D9\uFF0C\u5141\u8A31\u5176\u4ED6\u8A2D\u5099\u5411\u6B64\u8A2D\u5099\u8ACB\u6C42\u5EFA\u7ACB\u9023\u63A5\u3002",
        android_stop_service_tip: "\u95DC\u9589\u670D\u52D9\u5C07\u81EA\u52D5\u95DC\u9589\u6240\u6709\u5DF2\u5EFA\u7ACB\u7684\u9023\u63A5\u3002",
        android_version_audio_tip: "\u7576\u524D\u5B89\u5353\u7248\u672C\u4E0D\u652F\u6301\u97F3\u983B\u9304\u88FD\uFF0C\u8ACB\u5347\u7D1A\u81F3\u5B89\u535310\u6216\u66F4\u9AD8\u3002",
        android_start_service_tip: "\u9EDE\u64CA [\u555F\u52D5\u670D\u52D9] \u6216\u6253\u958B [\u5C4F\u5E55\u9304\u88FD] \u6B0A\u9650\u958B\u555F\u624B\u6A5F\u5C4F\u5E55\u5171\u4EAB\u670D\u52D9\u3002",
        Account: "\u5E33\u6236"
    },
    en: {
        desk_tip: "Your desktop can be accessed with this ID and password.",
        connecting_status: "Connecting to the RustDesk network...",
        not_ready_status: "Not ready. Please check your connection",
        id_change_tip: "Only a-z, A-Z, 0-9 and _ (underscore) characters allowed. The first letter must be a-z, A-Z. Length between 6 and 16.",
        install_tip: "Due to UAC, RustDesk can not work properly as the remote side in some cases. To avoid UAC, please click the button below to install RustDesk to the system.",
        config_acc: 'In order to control your Desktop remotely, you need to grant RustDesk "Accessibility" permissions.',
        config_screen: 'In order to access your Desktop remotely, you need to grant RustDesk "Screen Recording" permissions.',
        agreement_tip: "By starting the installation, you accept the license agreement.",
        not_close_tcp_tip: "Don't close this window while you are using the tunnel",
        setup_server_tip: "For faster connection, please set up your own server",
        "Auto Login": 'Auto Login (Only valid if you set "Lock after session end")',
        whitelist_tip: "Only whitelisted IP can access me",
        whitelist_sep: "Seperated by comma, semicolon, spaces or new line",
        "Wrong credentials": "Wrong username or password",
        invalid_http: "must start with http:// or https://",
        install_daemon_tip: "For starting on boot, you need to install system service.",
        android_input_permission_tip1: "After obtaining the input permission, the remote device can control this Android device by mouse",
        android_input_permission_tip2: "Please go to the next system settings page,find and enter [Installed Services],turn [RustDesk Input] service ON",
        android_new_connection_tip: "New control request has been received,it want to control your current device.",
        android_service_will_start_tip: "Turning on the Screen Capture will automatically start the service,allowing other devices to request a connection from this device.",
        android_stop_service_tip: "Closing the service will automatically close all established connections.",
        android_version_audio_tip: "The current Android version does not support audio capture, please upgrade to Android 10 or higher.",
        android_start_service_tip: "Tap [Start Service] or OPEN [Screen Capture] permission to start the screen sharing service."
    },
    fr: {
        Status: "Statut",
        "Your Desktop": "Votre bureau",
        desk_tip: "Votre bureau est accessible via l'identifiant et le mot de passe ci-dessous.",
        Password: "Mot de passe",
        Ready: "Pr\xEAt",
        Established: "\xC9tabli",
        connecting_status: "Connexion au r\xE9seau RustDesk...",
        "Enable Service": "Autoriser le service",
        "Start Service": "D\xE9marrer le service",
        "Service is running": "Le service est en cours d'ex\xE9cution",
        "Service is not running": "Le service ne fonctionne pas",
        not_ready_status: "Pas pr\xEAt, veuillez v\xE9rifier la connexion r\xE9seau",
        "Control Remote Desktop": "Contr\xF4ler le bureau \xE0 distance",
        "Transfer File": "Transf\xE9rer le fichier",
        Connect: "Connecter",
        "Recent Sessions": "Sessions r\xE9centes",
        "Address Book": "Carnet d'adresses",
        Confirmation: "Confirmation",
        "TCP Tunneling": "Tunneling TCP",
        Remove: "Supprimer",
        "Refresh random password": "Actualiser le mot de passe al\xE9atoire",
        "Set your own password": "D\xE9finir votre propre mot de passe",
        "Enable Keyboard/Mouse": "Activer le contr\xF4le clavier/souris",
        "Enable Clipboard": "Activer la synchronisation du presse-papier",
        "Enable File Transfer": "Activer le transfert de fichiers",
        "Enable TCP Tunneling": "Activer le tunneling TCP",
        "IP Whitelisting": "Liste blanche IP",
        "ID/Relay Server": "ID/Serveur Relais",
        "Stop service": "Arr\xEAter le service",
        "Change ID": "Changer d'ID",
        Website: "Site Web",
        About: "\xC0 propos de",
        Mute: "Muet",
        "Audio Input": "Entr\xE9e audio",
        "ID Server": "Serveur ID",
        "Relay Server": "Serveur relais",
        "API Server": "Serveur API",
        invalid_http: "Doit commencer par http:// ou https://",
        "Invalid IP": "IP invalide",
        id_change_tip: "Seules les lettres a-z, A-Z, 0-9, _ (trait de soulignement) peuvent \xEAtre utilis\xE9es. La premi\xE8re lettre doit \xEAtre a-z, A-Z. La longueur doit \xEAtre comprise entre 6 et 16.",
        "Invalid format": "Format invalide",
        "This function is turned off by the server": "Cette fonction est d\xE9sactiv\xE9e par le serveur",
        "Not available": "Indisponible",
        "Too frequent": "Modifi\xE9 trop fr\xE9quemment, veuillez r\xE9essayer plus tard",
        Cancel: "Annuler",
        Skip: "Ignorer",
        Close: "Fermer",
        Retry: "R\xE9essayer",
        OK: "Confirmer",
        "Password Required": "Mot de passe requis",
        "Please enter your password": "Veuillez saisir votre mot de passe",
        "Remember password": "M\xE9moriser le mot de passe",
        "Wrong Password": "Mauvais mot de passe",
        "Do you want to enter again?": "Voulez-vous participer \xE0 nouveau ?",
        "Connection Error": "Erreur de connexion",
        Error: "Erreur",
        "Reset by the peer": "La connexion a \xE9t\xE9 ferm\xE9e par le pair",
        "Connecting...": "Connexion...",
        "Connection in progress. Please wait.": "Connexion en cours. Veuillez patienter.",
        "Please try 1 minute later": "R\xE9essayez dans une minute",
        "Login Error": "Erreur de connexion",
        Successful: "Succ\xE8s",
        "Connected, waiting for image...": "Connect\xE9, en attente de transmission d'image...",
        Name: "Nom",
        Type: "Taper",
        Modified: "Modifi\xE9",
        Size: "Taille",
        "Show Hidden Files": "Afficher les fichiers cach\xE9s",
        Receive: "Accepter",
        Send: "Envoyer",
        "Refresh File": "Actualiser le fichier",
        Local: "Local",
        Remote: "Distant",
        "Remote Computer": "Ordinateur distant",
        "Local Computer": "Ordinateur local",
        "Confirm Delete": "Confirmer la suppression",
        Delete: "Supprimer",
        Properties: "Propri\xE9t\xE9s",
        "Multi Select": "Choix multiple",
        "Empty Directory": "R\xE9pertoire vide",
        "Not an empty directory": "Pas un r\xE9pertoire vide",
        "Are you sure you want to delete this file?": "Voulez-vous vraiment supprimer ce fichier?",
        "Are you sure you want to delete this empty directory?": "Voulez-vous vraiment supprimer ce r\xE9pertoire vide\xA0?",
        "Are you sure you want to delete the file of this directory?": "Voulez-vous vraiment supprimer le fichier de ce r\xE9pertoire\xA0?",
        "Do this for all conflicts": "Appliquer \xE0 d'autres conflits",
        "This is irreversible!": "C'est irr\xE9versible !",
        Deleting: "Suppression",
        files: "fichier",
        Waiting: "En attente...",
        Finished: "Termin\xE9",
        Speed: "Vitesse",
        "Custom Image Quality": "D\xE9finir la qualit\xE9 d'image",
        "Privacy mode": "Mode priv\xE9",
        "Block user input": "Bloquer la saisie de l'utilisateur",
        "Unblock user input": "D\xE9bloquer l'entr\xE9e de l'utilisateur",
        "Adjust Window": "Ajuster la fen\xEAtre",
        Original: "Ratio d'origine",
        Shrink: "R\xE9tr\xE9cir",
        Stretch: "\xC9tirer",
        "Good image quality": "Bonne qualit\xE9 d'image",
        Balanced: "Qualit\xE9 d'image normale",
        "Optimize reaction time": "Optimiser le temps de r\xE9action",
        Custom: "Qualit\xE9 d'image personnalis\xE9e",
        "Show remote cursor": "Afficher le curseur distant",
        "Disable clipboard": "D\xE9sactiver le presse-papier",
        "Lock after session end": "Verrouiller l'ordinateur distant apr\xE8s la d\xE9connexion",
        Insert: "Ins\xE9rer",
        "Insert Lock": "Verrouiller l'ordinateur distant",
        Refresh: "Rafra\xEEchir l'\xE9cran",
        "ID does not exist": "L'ID n'existe pas",
        "Failed to connect to rendezvous server": "\xC9chec de la connexion au serveur rendezvous",
        "Please try later": "Veuillez essayer plus tard",
        "Remote desktop is offline": "Le bureau \xE0 distance est hors ligne",
        "Key mismatch": "Discordance de cl\xE9s",
        Timeout: "Connexion expir\xE9e",
        "Failed to connect to relay server": "\xC9chec de la connexion au serveur relais",
        "Failed to connect via rendezvous server": "\xC9chec de l'\xE9tablissement d'une connexion via le serveur rendezvous",
        "Failed to connect via relay server": "Impossible d'\xE9tablir une connexion via le serveur relais",
        "Failed to make direct connection to remote desktop": "Impossible d'\xE9tablir une connexion directe",
        "Set Password": "D\xE9finir le mot de passe",
        "OS Password": "Mot de passe du syst\xE8me d'exploitation",
        install_tip: "Vous utilisez une version non install\xE9e. En raison des restrictions UAC, en tant que terminal contr\xF4l\xE9, dans certains cas, il ne sera pas en mesure de contr\xF4ler la souris et le clavier ou d'enregistrer l'\xE9cran. Veuillez cliquer sur le bouton ci-dessous pour installer RustDesk au syst\xE8me pour \xE9viter la question ci-dessus.",
        "Click to upgrade": "Cliquez pour mettre \xE0 niveau",
        "Click to download": "Cliquez pour t\xE9l\xE9charger",
        "Click to update": "Cliquez pour mettre \xE0 jour",
        "Configuration Permissions": "Autorisations de configuration",
        Configure: "Configurer",
        config_acc: `Afin de pouvoir contr\xF4ler votre bureau \xE0 distance, veuillez donner l'autorisation "accessibilit\xE9" \xE0 RustDesk.`,
        config_screen: `Afin de pouvoir acc\xE9der \xE0 votre bureau \xE0 distance, veuillez donner \xE0 RustDesk l'autorisation "enregistrement d'\xE9cran".`,
        "Installing ...": "Installation...",
        Install: "Installer",
        Installation: "Installation",
        "Installation Path": "Chemin d'installation",
        "Create start menu shortcuts": "Cr\xE9er des raccourcis dans le menu d\xE9marrer",
        "Create desktop icon": "Cr\xE9er une ic\xF4ne sur le bureau",
        agreement_tip: "D\xE9marrer l'installation signifie accepter le contrat de licence.",
        "Accept and Install": "Accepter et installer",
        "End-user license agreement": "Contrat d'utilisateur",
        "Generating ...": "G\xE9n\xE9ration...",
        "Your installation is lower version.": "La version que vous avez install\xE9e est inf\xE9rieure \xE0 la version en cours d'ex\xE9cution.",
        not_close_tcp_tip: "Veuillez ne pas fermer cette fen\xEAtre lors de l'utilisation du tunnel",
        "Listening ...": "En attente de connexion tunnel...",
        "Remote Host": "H\xF4te distant",
        "Remote Port": "Port distant",
        Action: "Action",
        Add: "Ajouter",
        "Local Port": "Port local",
        setup_server_tip: "Si vous avez besoin d'une vitesse de connexion plus rapide, vous pouvez choisir de cr\xE9er votre propre serveur",
        "Too short, at least 6 characters.": "Trop court, au moins 6 caract\xE8res.",
        "The confirmation is not identical.": "Les deux entr\xE9es ne correspondent pas",
        Permissions: "Autorisations",
        Accept: "Accepter",
        Dismiss: "Rejeter",
        Disconnect: "D\xE9connecter",
        "Allow using keyboard and mouse": "Autoriser l'utilisation du clavier et de la souris",
        "Allow using clipboard": "Autoriser l'utilisation du presse-papier",
        "Allow hearing sound": "Autoriser l'audition du son",
        "Allow file transfer": "Autoriser le transfert de fichiers",
        "File transfer": "Transfert de fichiers",
        Connected: "Connect\xE9",
        "Direct and encrypted connection": "Connexion directe chiffr\xE9e",
        "Relayed and encrypted connection": "Connexion relais chiffr\xE9e",
        "Direct and unencrypted connection": "Connexion directe non chiffr\xE9e",
        "Relayed and unencrypted connection": "Connexion relais non chiffr\xE9e",
        "Enter Remote ID": "Entrez l'ID de l'appareil \xE0 distance",
        "Enter your password": "Entrez votre mot de passe",
        "Logging in...": "Se connecter...",
        "Enable RDP session sharing": "Activer le partage de session RDP",
        "Auto Login": "Connexion automatique (le verrouillage ne sera effectif qu'apr\xE8s la d\xE9sactivation du premier param\xE8tre)",
        "Enable Direct IP Access": "Autoriser l'acc\xE8s direct par IP",
        Rename: "Renommer",
        Space: "Espace",
        "Create Desktop Shortcut": "Cr\xE9er un raccourci sur le bureau",
        "Change Path": "Changer de chemin",
        "Create Folder": "Cr\xE9er un dossier",
        "Please enter the folder name": "Veuillez saisir le nom du dossier",
        "Fix it": "R\xE9parez-le",
        Warning: "Avertissement",
        "Login screen using Wayland is not supported": "L'\xE9cran de connexion utilisant Wayland n'est pas pris en charge",
        "Reboot required": "Red\xE9marrage pour prendre effet",
        "Unsupported display server ": "Le serveur d'affichage actuel n'est pas pris en charge",
        "x11 expected": "Veuillez passer \xE0 x11",
        Port: "Port",
        Settings: "Param\xE8tres",
        Username: " Nom d'utilisateur",
        "Invalid port": "Port invalide",
        "Closed manually by the peer": "Ferm\xE9 manuellement par le pair",
        "Enable remote configuration modification": "Autoriser la modification de la configuration \xE0 distance",
        "Run without install": "Ex\xE9cuter sans installer",
        "Always connected via relay": "Forcer la connexion relais",
        "Always connect via relay": "Forcer la connexion relais",
        whitelist_tip: "Seul l'IP dans la liste blanche peut acc\xE9der \xE0 mon appareil",
        Login: "Connexion",
        Logout: "D\xE9connexion",
        Tags: "\xC9tiqueter",
        "Search ID": "Rechercher un ID",
        "Current Wayland display server is not supported": "Le serveur d'affichage Wayland n'est pas pris en charge",
        whitelist_sep: "Vous pouvez utiliser une virgule, un point-virgule, un espace ou une nouvelle ligne comme s\xE9parateur",
        "Add ID": "Ajouter un ID",
        "Add Tag": "Ajouter une balise",
        "Unselect all tags": "D\xE9s\xE9lectionner toutes les balises",
        "Network error": "Erreur r\xE9seau",
        "Username missed": "Nom d'utilisateur manqu\xE9",
        "Password missed": "Mot de passe manqu\xE9",
        "Wrong credentials": "Identifiant ou mot de passe erron\xE9",
        "Edit Tag": "Modifier la balise",
        "Unremember Password": "Mot de passe oubli\xE9",
        Favorites: "Favoris",
        "Add to Favorites": "Ajouter aux Favoris",
        "Remove from Favorites": "Retirer des favoris",
        Empty: "Vide",
        "Invalid folder name": "Nom de dossier invalide",
        "Socks5 Proxy": "Socks5 Agents",
        Hostname: "Nom d'h\xF4te",
        Discovered: "D\xE9couvert",
        install_daemon_tip: "Pour d\xE9marrer au d\xE9marrage, vous devez installer le service syst\xE8me.",
        "Remote ID": "ID de l'appareil \xE0 distance",
        Paste: "Coller",
        "Paste here?": "Coller ici\xA0?",
        "Are you sure to close the connection?": "\xCAtes-vous s\xFBr de fermer la connexion?",
        "Download new version": "T\xE9l\xE9charger la nouvelle version",
        "Touch mode": "Mode tactile",
        "Mouse mode": "Mode souris",
        "One-Finger Tap": "Tapez d'un doigt",
        "Left Mouse": "Souris gauche",
        "One-Long Tap": "Un long robinet",
        "Two-Finger Tap": "Tapez \xE0 deux doigts",
        "Right Mouse": "Bouton droit de la souris",
        "One-Finger Move": "Mouvement \xE0 un doigt",
        "Double Tap & Move": "Appuyez deux fois et d\xE9placez",
        "Mouse Drag": "Glissement de la souris",
        "Two-Finger vertically": "Deux doigts verticalement",
        "Mouse Wheel": "Roulette de la souris",
        "Two-Finger Move": "Mouvement \xE0 deux doigts",
        "Canvas Move": "D\xE9placement de la toile",
        "Pinch to Zoom": "Pincer pour zoomer",
        "Canvas Zoom": "Zoom sur la toile",
        "Reset canvas": "R\xE9initialiser le canevas",
        "No permission of file transfer": "Aucune autorisation de transfert de fichiers",
        Note: "Noter",
        Connection: "Connexion",
        "Share Screen": "Partager l'\xE9cran",
        CLOSE: "FERMER",
        OPEN: "OUVRIR",
        Chat: "Discuter",
        Total: "Total",
        items: "\xE9l\xE9ments",
        Selected: "Choisi",
        "Screen Capture": "Capture d'\xE9cran",
        "Mouse Control": "Contr\xF4le de la souris",
        "File Transfer": "Transfert de fichier",
        "Audio Capture": "Capture audio",
        "File Connection": "Connexion de fichier",
        "Screen Connection": "Connexion de l'\xE9cran",
        "Do you accept?": "Do you accept?",
        "Open System Setting": "Ouvrir les param\xE8tres syst\xE8me",
        "How to get Android input permission?": "Comment obtenir l'autorisation d'entr\xE9e Android\xA0?",
        android_input_permission_tip1: "Apr\xE8s avoir obtenu l'autorisation d'entr\xE9e, l'appareil distant peut contr\xF4ler cet appareil Android avec la souris",
        android_input_permission_tip2: "Veuillez acc\xE9der \xE0 la page suivante des param\xE8tres syst\xE8me, recherchez et entrez [Services install\xE9s], activez le service [RustDesk Input]",
        android_new_connection_tip: "Une nouvelle demande de contr\xF4le a \xE9t\xE9 re\xE7ue, elle souhaite contr\xF4ler votre appareil actuel.",
        android_service_will_start_tip: "L'activation de la capture d'\xE9cran d\xE9marrera automatiquement le service, permettant \xE0 d'autres appareils de demander une connexion \xE0 partir de cet appareil.",
        android_stop_service_tip: "La fermeture du service fermera automatiquement toutes les connexions \xE9tablies.",
        android_version_audio_tip: "La version actuelle d'Android ne prend pas en charge la capture audio, veuillez passer \xE0 Android 10 ou sup\xE9rieur.",
        android_start_service_tip: "Appuyez sur [D\xE9marrer le service] ou sur l'autorisation OUVRIR [Capture d'\xE9cran] pour d\xE9marrer le service de partage d'\xE9cran.",
        Account: "Compte"
    }
};

function Ti(e, u, r) {
    return e == "error" && u == "Connection Error" && r.toLowerCase()
        .indexOf("offline") < 0 && r.toLowerCase()
        .indexOf("exist") < 0 && r.toLowerCase()
        .indexOf("handshake") < 0 && r.toLowerCase()
        .indexOf("failed") < 0 && r.toLowerCase()
        .indexOf("resolve") < 0 && r.toLowerCase()
        .indexOf("mismatch") < 0 && r.toLowerCase()
        .indexOf("manually") < 0 && r.toLowerCase()
        .indexOf("not allowed") < 0
}
const Mi = {
        VK_A: "a",
        VK_B: "b",
        VK_C: "c",
        VK_D: "d",
        VK_E: "e",
        VK_F: "f",
        VK_G: "g",
        VK_H: "h",
        VK_I: "i",
        VK_J: "j",
        VK_K: "k",
        VK_L: "l",
        VK_M: "m",
        VK_N: "n",
        VK_O: "o",
        VK_P: "p",
        VK_Q: "q",
        VK_R: "r",
        VK_S: "s",
        VK_T: "t",
        VK_U: "u",
        VK_V: "v",
        VK_W: "w",
        VK_X: "x",
        VK_Y: "y",
        VK_Z: "z",
        VK_0: "0",
        VK_1: "1",
        VK_2: "2",
        VK_3: "3",
        VK_4: "4",
        VK_5: "5",
        VK_6: "6",
        VK_7: "7",
        VK_8: "8",
        VK_9: "9",
        VK_COMMA: ",",
        VK_SLASH: "/",
        VK_SEMICOLON: ";",
        VK_QUOTE: "'",
        VK_LBRACKET: "[",
        VK_RBRACKET: "]",
        VK_BACKSLASH: "\\",
        VK_MINUS: "-",
        VK_PLUS: "=",
        VK_DIVIDE: "Divide",
        VK_MULTIPLY: "Multiply",
        VK_SUBTRACT: "Subtract",
        VK_ADD: "Add",
        VK_DECIMAL: "Decimal",
        VK_F1: "F1",
        VK_F2: "F2",
        VK_F3: "F3",
        VK_F4: "F4",
        VK_F5: "F5",
        VK_F6: "F6",
        VK_F7: "F7",
        VK_F8: "F8",
        VK_F9: "F9",
        VK_F10: "F10",
        VK_F11: "F11",
        VK_F12: "F12",
        VK_ENTER: "Return",
        VK_CANCEL: "Cancel",
        VK_BACK: "Backspace",
        VK_TAB: "Tab",
        VK_CLEAR: "Clear",
        VK_RETURN: "Return",
        VK_SHIFT: "Shift",
        VK_CONTROL: "Control",
        VK_MENU: "Alt",
        VK_PAUSE: "Pause",
        VK_CAPITAL: "CapsLock",
        VK_KANA: "Kana",
        VK_HANGUL: "Hangul",
        VK_JUNJA: "Junja",
        VK_FINAL: "Final",
        VK_HANJA: "Hanja",
        VK_KANJI: "Kanji",
        VK_ESCAPE: "Escape",
        VK_CONVERT: "Convert",
        VK_SPACE: "Space",
        VK_PRIOR: "PageUp",
        VK_NEXT: "PageDown",
        VK_END: "End",
        VK_HOME: "Home",
        VK_LEFT: "LeftArrow",
        VK_UP: "UpArrow",
        VK_RIGHT: "RightArrow",
        VK_DOWN: "DownArrow",
        VK_SELECT: "Select",
        VK_PRINT: "Print",
        VK_EXECUTE: "Execute",
        VK_SNAPSHOT: "Snapshot",
        VK_INSERT: "Insert",
        VK_DELETE: "Delete",
        VK_HELP: "Help",
        VK_SLEEP: "Sleep",
        VK_SEPARATOR: "Separator",
        VK_NUMPAD0: "Numpad0",
        VK_NUMPAD1: "Numpad1",
        VK_NUMPAD2: "Numpad2",
        VK_NUMPAD3: "Numpad3",
        VK_NUMPAD4: "Numpad4",
        VK_NUMPAD5: "Numpad5",
        VK_NUMPAD6: "Numpad6",
        VK_NUMPAD7: "Numpad7",
        VK_NUMPAD8: "Numpad8",
        VK_NUMPAD9: "Numpad9",
        Apps: "Apps",
        Meta: "Meta",
        RAlt: "RAlt",
        RWin: "RWin",
        RControl: "RControl",
        RShift: "RShift",
        CTRL_ALT_DEL: "CtrlAltDel",
        LOCK_SCREEN: "LockScreen"
    },
    qi = "1.1.9";
let pu;
async function ui() {
    const e = new mi;
    await e.init(), console.log("zstd ready"), pu = e
}
async function ri(e) {
    const u = 1024 * 1024 * 64,
        r = 1024 * 1024;
    let n = 30 * e.length;
    n > u && (n = u), n < r && (n = r);
    try {
        return pu || await ui(), pu.decode(e, n)
    } catch (i) {
        console.error("decompress failed: " + i);
        return
    }
}
const zi = Wi();

function Ji(e, u) {
    const r = zi || e.substring(e.length - 2)
        .toLowerCase();
    let n = ei.en,
        i = ei[r];
    i || (i = n);
    let t = i[u];
    return !t && r != "en" && (t = n[u]), t || u
}
const Li = "z".charCodeAt(0),
    Ui = "a".charCodeAt(0);

function Vi(e, u) {
    const r = Mi[e] || e;
    if (r.length == 1) {
        const i = r.charCodeAt(0);
        return !u && (i > Li || i < Ui) ? E.fromPartial({
            unicode: i
        }) : E.fromPartial({
            chr: i
        })
    }
    const n = je(e);
    return n == y.UNRECOGNIZED && console.error("Unknown control key " + e), E.fromPartial({
        control_key: n
    })
}
async function _u(e) {
    await new Promise(u => setTimeout(u, e))
}

function Wi() {
    try {
        const e = window.location.search;
        return new URLSearchParams(e)
            .get("lang") || ""
    } catch {
        return ""
    }
}
const Hi = 21116,
    ii = api;
let ni = localStorage.getItem("rendezvous-server") || ii[0];
const protocol = window.location.protocol === 'https:' ? 'wss://' : 'ws://';
const Zi = protocol;

class Gi {
    constructor() {
        _(this, "_msgs");
        _(this, "_ws");
        _(this, "_interval");
        _(this, "_id");
        _(this, "_hash");
        _(this, "_msgbox");
        _(this, "_draw");
        _(this, "_peerInfo");
        _(this, "_firstFrame");
        _(this, "_videoDecoder");
        _(this, "_password");
        _(this, "_options");
        _(this, "_videoTestSpeed");
        this._msgbox = Qi, this._draw = mu, this._msgs = [], this._id = "", this._videoTestSpeed = [0, 0]
    }
    async start(u) {
        try {
            await this._start(u)
        } catch (r) {
            this.msgbox("error", "Connection Error", r.type == "close" ? "Reset by the peer" : String(r))
        }
    }
    async _start(u) {
        if (this._options || (this._options = nu()[u] || {}), !this._password) {
            const v = this.getOption("password");
            if (v) try {
                this._password = Uint8Array.from(JSON.parse("[" + v + "]"))
            } catch (tu) {
                console.error(tu)
            }
        }
        this._interval = setInterval(() => {
            var v;
            for (; this._msgs.length;)(v = this._ws) == null || v.sendMessage(this._msgs[0]), this._msgs.splice(0, 1)
        }, 1), this.loadVideoDecoder();
        const r = ti(),
            n = new cu(r, !0);
        this._ws = n, this._id = u, console.log(new Date + ": Conntecting to rendezvoous server: " + r + ", for " + u), await n.open(), console.log(new Date + ": Connected to rendezvoous server");
        const i = su.DEFAULT_CONN,
            t = du.SYMMETRIC,
            s = J.fromPartial({
                id: u,
                licence_key: localStorage.getItem("key") || void 0,
                conn_type: i,
                nat_type: t,
                token: localStorage.getItem("access_token") || void 0
            });
        n.sendRendezvous({
            punch_hole_request: s
        });
        const l = await n.next();
        n.close(), console.log(new Date + ": Got relay response");
        const c = l.punch_hole_response,
            p = l.relay_response;
        if (c) {
            if (c == null ? void 0 : c.other_failure) {
                this.msgbox("error", "Error", c == null ? void 0 : c.other_failure);
                return
            }
            if (c.failure != O.UNRECOGNIZED) switch (c == null ? void 0 : c.failure) {
                case O.ID_NOT_EXIST:
                    this.msgbox("error", "Error", "ID does not exist");
                    break;
                case O.OFFLINE:
                    this.msgbox("error", "Error", "Remote desktop is offline");
                    break;
                case O.LICENSE_MISMATCH:
                    this.msgbox("error", "Error", "Key mismatch");
                    break;
                case O.LICENSE_OVERUSE:
                    this.msgbox("error", "Error", "Key overuse");
                    break
            }
        } else if (p) {
            if (!p.version) {
                this.msgbox("error", "Error", "Remote version is low, not support web");
                return
            }
            await this.connectRelay(p)
        }
    }
    async connectRelay(u) {
        const r = u.pk;
        let n = u.relay_server;
        n ? n = fu(n, !0, 2) : n = ti(!0);
        const i = u.uuid;
        console.log(new Date + ": Connecting to relay server: " + n);
        const t = new cu(n, !1);
        await t.open(), console.log(new Date + ": Connected to relay server"), this._ws = t;
        const s = L.fromPartial({
            licence_key: localStorage.getItem("key") || void 0,
            uuid: i
        });
        t.sendRendezvous({
            request_relay: s
        });
        const l = await this.secure(r) || !1;
        N("connection_ready", {
            secure: l,
            direct: !1
        }), await this.msgLoop()
    }
    async secure(u) {
        var Au, ku, yu, Cu, Bu, Su, wu, gu;
        if (u) {
            const A = "OeVuKk5nlHiXp+APNn0Y3pC1Iwpwn44JGqrQCsWqmBw=";
            try {
                if (u = await ci(u, localStorage.getItem("key") || A), u) {
                    const I = Mu.decode(u);
                    I.id == this._id && (u = I.pk)
                }(u == null ? void 0 : u.length) != 32 && (u = void 0)
            } catch (I) {
                console.error(I), u = void 0
            }
            u || console.error("Handshake failed: invalid public key from rendezvous server")
        }
        if (!u) {
            const A = k.fromPartial({});
            (Au = this._ws) == null || Au.sendMessage({
                public_key: A
            });
            return
        }
        const r = await ((ku = this._ws) == null ? void 0 : ku.next());
        let n = r == null ? void 0 : r.signed_id;
        if (!n) {
            console.error("Handshake failed: invalid message type");
            const A = k.fromPartial({});
            (yu = this._ws) == null || yu.sendMessage({
                public_key: A
            });
            return
        }
        try {
            n = await ci(n.id, Uint8Array.from(u))
        } catch (A) {
            console.error(A), console.error("pk mismatch, fall back to non-secure");
            const I = k.fromPartial({});
            (Cu = this._ws) == null || Cu.sendMessage({
                public_key: I
            });
            return
        }
        const i = Mu.decode(n),
            t = i.id,
            s = i.pk;
        if (t != this._id) {
            console.error("Handshake failed: sign failure");
            const A = k.fromPartial({});
            (Bu = this._ws) == null || Bu.sendMessage({
                public_key: A
            });
            return
        }
        if (s.length != 32) {
            console.error("Handshake failed: invalid public box key length from peer");
            const A = k.fromPartial({});
            (Su = this._ws) == null || Su.sendMessage({
                public_key: A
            });
            return
        }
        const [l, c] = en(), p = un(), v = rn(p, s, l), tu = k.fromPartial({
            asymmetric_value: c,
            symmetric_value: v
        });
        return (wu = this._ws) == null || wu.sendMessage({
            public_key: tu
        }), (gu = this._ws) == null || gu.setSecretKey(p), console.log("secured"), !0
    }
    async msgLoop() {
        var u, r;
        for (;;) {
            const n = await ((u = this._ws) == null ? void 0 : u.next());
            if (n == null ? void 0 : n.hash) this._hash = n == null ? void 0 : n.hash, this._password || this.msgbox("input-password", "Password Required", ""), this.login();
            else if (n == null ? void 0 : n.test_delay) {
                const i = n == null ? void 0 : n.test_delay;
                console.log(i), i.from_client || (r = this._ws) == null || r.sendMessage({
                    test_delay: i
                })
            } else if (n == null ? void 0 : n.login_response) {
                const i = n == null ? void 0 : n.login_response;
                i.error ? i.error == "Wrong Password" ? (this._password = void 0, this.msgbox("re-input-password", i.error, "Do you want to enter again?")) : this.msgbox("error", "Login Error", i.error) : i.peer_info && this.handlePeerInfo(i.peer_info)
            } else if (n == null ? void 0 : n.video_frame) this.handleVideoFrame(n == null ? void 0 : n.video_frame);
            else if (n == null ? void 0 : n.clipboard) {
                const i = n == null ? void 0 : n.clipboard;
                if (i.compress) {
                    const t = await ri(i.content);
                    if (!t) continue;
                    i.content = t
                }
                try {
                    cn(new TextDecoder()
                        .decode(i.content))
                } catch (t) {
                    console.error(t)
                }
            } else if (n == null ? void 0 : n.cursor_data) {
                const i = n == null ? void 0 : n.cursor_data,
                    t = await ri(i.colors);
                if (!t) continue;
                i.colors = t, N("cursor_data", i)
            } else if (n == null ? void 0 : n.cursor_id) N("cursor_id", {
                id: n == null ? void 0 : n.cursor_id
            });
            else if (n == null ? void 0 : n.cursor_position) N("cursor_position", n == null ? void 0 : n.cursor_position);
            else if (n == null ? void 0 : n.misc) {
                if (!this.handleMisc(n == null ? void 0 : n.misc)) break
            } else(n == null ? void 0 : n.audio_frame) && dn(n == null ? void 0 : n.audio_frame.data)
        }
    }
    msgbox(u, r, n) {
        var i;
        (i = this._msgbox) == null || i.call(this, u, r, n)
    }
    draw(u) {
        var r;
        (r = this._draw) == null || r.call(this, u), mu(u)
    }
    close() {
        var u, r;
        this._msgs = [], clearInterval(this._interval), (u = this._ws) == null || u.close(), (r = this._videoDecoder) == null || r.close()
    }
    refresh() {
        var r;
        const u = B.fromPartial({
            refresh_video: !0
        });
        (r = this._ws) == null || r.sendMessage({
            misc: u
        })
    }
    setMsgbox(u) {
        this._msgbox = u
    }
    setDraw(u) {
        this._draw = u
    }
    login(u = void 0) {
        var r, n, i;
        if (u) {
            const t = (r = this._hash) == null ? void 0 : r.salt;
            let s = vu([u, t]);
            this._password = s;
            const l = (n = this._hash) == null ? void 0 : n.challenge;
            s = vu([s, l]), this.msgbox("connecting", "Connecting...", "Logging in..."), this._sendLoginMessage(s)
        } else {
            let t = this._password;
            if (t) {
                const s = (i = this._hash) == null ? void 0 : i.challenge;
                t = vu([t, s])
            }
            this._sendLoginMessage(t)
        }
    }
    async reconnect() {
        this.close(), await this.start(this._id)
    }
    _sendLoginMessage(u = void 0) {
        var n;
        const r = T.fromPartial({
            username: this._id,
            my_id: "web",
            my_name: "web",
            password: u,
            option: this.getOptionMessage(),
            video_ack_required: !0
        });
        (n = this._ws) == null || n.sendMessage({
            login_request: r
        })
    }
    getOptionMessage() {
        let u = 0;
        const r = f.fromPartial({}),
            n = this.getImageQualityEnum(this.getImageQuality(), !0),
            i = x.Yes;
        return n != null && (r.image_quality = n, u += 1), this._options["show-remote-cursor"] && (r.show_remote_cursor = i, u += 1), this._options["lock-after-session-end"] && (r.lock_after_session_end = i, u += 1), this._options["privacy-mode"] && (r.privacy_mode = i, u += 1), this._options["disable-audio"] && (r.disable_audio = i, u += 1), this._options["disable-clipboard"] && (r.disable_clipboard = i, u += 1), u > 0 ? r : void 0
    }
    sendVideoReceived() {
        var r;
        const u = B.fromPartial({
            video_received: !0
        });
        (r = this._ws) == null || r.sendMessage({
            misc: u
        })
    }
    handleVideoFrame(u) {
        var i;
        if (this._firstFrame || (this.msgbox("", "", ""), this._firstFrame = !0), u.vp9s) {
            const t = this._videoDecoder;
            var r = new Date()
                .getTime(),
                n = 0;
            const s = (i = u.vp9s) == null ? void 0 : i.frames.length;
            u.vp9s.frames.forEach(l => {
                t.processFrame(l.data.slice(0)
                    .buffer, c => {
                        if (n++, n == s && this.sendVideoReceived(), c && t.frameBuffer && s == n) {
                            this.draw(t.frameBuffer);
                            var p = new Date()
                                .getTime() - r;
                            this._videoTestSpeed[1] += p, this._videoTestSpeed[0] += 1, this._videoTestSpeed[0] >= 30 && (console.log("video decoder: " + parseInt("" + this._videoTestSpeed[1] / this._videoTestSpeed[0])), this._videoTestSpeed = [0, 0])
                        }
                    })
            })
        }
    }
    handlePeerInfo(u) {
        var i, t;
        if (this._peerInfo = u, u.displays.length == 0) {
            this.msgbox("error", "Remote Error", "No Display");
            return
        }
        this.msgbox("success", "Successful", "Connected, waiting for image..."), N("peer_info", u);
        const r = this.shouldAutoLogin();
        r && this.inputOsPassword(r);
        const n = (i = this.getOption("info")) == null ? void 0 : i.username;
        if (n && !u.username && (u.username = n), this.setOption("info", u), this.getRemember()) {
            if ((t = this._password) == null ? void 0 : t.length) {
                const s = this._password.toString();
                s != this.getOption("password") && (this.setOption("password", s), console.log("remember password of " + this._id))
            }
        } else this.setOption("password", void 0)
    }
    shouldAutoLogin() {
        const u = this.getOption("lock-after-session-end"),
            r = !!this.getOption("auto-login"),
            n = this.getOption("os-password");
        return n && u && r ? n : ""
    }
    handleMisc(u) {
        if (u.audio_format) sn(u.audio_format.channels, u.audio_format.sample_rate);
        else if (u.chat_message) N("chat", {
            text: u.chat_message.text
        });
        else if (u.permission_info) {
            const r = u.permission_info;
            console.info("Change permission " + r.permission + " -> " + r.enabled);
            let n;
            switch (r.permission) {
                case Z.Keyboard:
                    n = "keyboard";
                    break;
                case Z.Clipboard:
                    n = "clipboard";
                    break;
                case Z.Audio:
                    n = "audio";
                    break;
                default:
                    return
            }
            N("permission", {
                [n]: r.enabled
            })
        } else if (u.switch_display) this.loadVideoDecoder(), N("switch_display", u.switch_display);
        else if (u.close_reason) return this.msgbox("error", "Connection Error", u.close_reason), this.close(), !1;
        return !0
    }
    getRemember() {
        return this._options.remember || !1
    }
    setRemember(u) {
        this.setOption("remember", u)
    }
    getOption(u) {
        return this._options[u]
    }
    setOption(u, r) {
        r == null ? delete this._options[u] : this._options[u] = r, this._options.tm = new Date()
            .getTime();
        const n = nu();
        n[this._id] = this._options, localStorage.setItem("peers", JSON.stringify(n))
    }
    inputKey(u, r, n, i, t, s, l) {
        var p;
        const c = Vi(u, Yi());
        !c || (i && (u == "Alt" || u == "RAlt") && (i = !1), t && (u == "Control" || u == "RControl") && (t = !1), s && (u == "Shift" || u == "RShift") && (s = !1), l && (u == "Meta" || u == "RWin") && (l = !1), c.down = r, c.press = n, c.modifiers = this.getMod(i, t, s, l), (p = this._ws) == null || p.sendMessage({
            key_event: c
        }))
    }
    ctrlAltDel() {
        var r, n;
        const u = E.fromPartial({
            down: !0
        });
        ((r = this._peerInfo) == null ? void 0 : r.platform) == "Windows" ? u.control_key = y.CtrlAltDel: (u.control_key = y.Delete, u.modifiers = this.getMod(!0, !0, !1, !1)), (n = this._ws) == null || n.sendMessage({
            key_event: u
        })
    }
    inputString(u) {
        var n;
        const r = E.fromPartial({
            seq: u
        });
        (n = this._ws) == null || n.sendMessage({
            key_event: r
        })
    }
    switchDisplay(u) {
        var i;
        const r = q.fromPartial({
                display: u
            }),
            n = B.fromPartial({
                switch_display: r
            });
        (i = this._ws) == null || i.sendMessage({
            misc: n
        })
    }
    async inputOsPassword(u) {
        var n;
        this.inputMouse(), await _u(50), this.inputMouse(0, 3, 3), await _u(50), this.inputMouse(1 | 1 << 3), this.inputMouse(2 | 1 << 3), await _u(1200);
        const r = E.fromPartial({
            press: !0,
            seq: u
        });
        (n = this._ws) == null || n.sendMessage({
            key_event: r
        })
    }
    lockScreen() {
        var r;
        const u = E.fromPartial({
            down: !0,
            control_key: y.LockScreen
        });
        (r = this._ws) == null || r.sendMessage({
            key_event: u
        })
    }
    getMod(u, r, n, i) {
        const t = [];
        return u && t.push(y.Alt), r && t.push(y.Control), n && t.push(y.Shift), i && t.push(y.Meta), t
    }
    inputMouse(u = 0, r = 0, n = 0, i = !1, t = !1, s = !1, l = !1) {
        var p;
        const c = M.fromPartial({
            mask: u,
            x: r,
            y: n,
            modifiers: this.getMod(i, t, s, l)
        });
        (p = this._ws) == null || p.sendMessage({
            mouse_event: c
        })
    }
    toggleOption(u) {
        var s;
        const r = !this._options[u],
            n = f.fromPartial({}),
            i = r ? x.Yes : x.No;
        switch (u) {
            case "show-remote-cursor":
                n.show_remote_cursor = i;
                break;
            case "disable-audio":
                n.disable_audio = i;
                break;
            case "disable-clipboard":
                n.disable_clipboard = i;
                break;
            case "lock-after-session-end":
                n.lock_after_session_end = i;
                break;
            case "privacy-mode":
                n.privacy_mode = i;
                break;
            case "block-input":
                n.block_input = x.Yes;
                break;
            case "unblock-input":
                n.block_input = x.No;
                break;
            default:
                return
        }
        u.indexOf("block-input") < 0 && this.setOption(u, r);
        const t = B.fromPartial({
            option: n
        });
        (s = this._ws) == null || s.sendMessage({
            misc: t
        })
    }
    getImageQuality() {
        return this.getOption("image-quality")
    }
    getImageQualityEnum(u, r) {
        switch (u) {
            case "low":
                return H.Low;
            case "best":
                return H.Best;
            case "balanced":
                return r ? void 0 : H.Balanced;
            default:
                return
        }
    }
    setImageQuality(u) {
        var t;
        this.setOption("image-quality", u);
        const r = this.getImageQualityEnum(u, !1);
        if (r == null) return;
        const n = f.fromPartial({
                image_quality: r
            }),
            i = B.fromPartial({
                option: n
            });
        (t = this._ws) == null || t.sendMessage({
            misc: i
        })
    }
    loadVideoDecoder() {
        var u;
        (u = this._videoDecoder) == null || u.close(), jr(r => {
            this._videoDecoder = r, console.log("vp9 loaded"), console.log(r)
        })
    }
}

function Ki() {
    ii.forEach(e => {
        const u = new Date()
            .getTime();
        new cu(fu(e), !0)
            .open()
            .then(() => {
                console.log("latency of " + e + ": " + (new Date()
                    .getTime() - u)), ni = e, localStorage.setItem("rendezvous-server", e)
            })
    })
}
Ki();

function ti(e = !1) {
    const u = localStorage.getItem("custom-rendezvous-server");
    return fu(u || ni, e)
}

function fu(e, u = !1, r = 0) {
    if (e.indexOf(":") > 0) {
        const n = e.split(":"),
            i = parseInt(n[1]);
        e = n[0] + ":" + (i + (u ? r || 3 : 2))
    } else e += ":" + (Hi + (u ? 3 : 2));
    return Zi + e
}

function vu(e) {
    const u = new Fi.exports.Hash;
    return e.forEach(r => (typeof r == "string" && (r = new TextEncoder()
        .encode(r)), u.update(r))), u.digest()
}
var V = void 0,
    w = [];
window.curConn = void 0;
window.getRgba = () => {
    const e = V;
    return V = void 0, e || null
};
window.isMobile = () => /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4));

function Yi() {
    return !isMobile()
}

function Qi(e, u, r) {
    if (!!w && !(!e || e == "error" && !r)) {
        r.toLowerCase();
        var n = Ti(e, u, r) ? "true" : "";
        w.push({
            name: "msgbox",
            type: e,
            title: u,
            text: r,
            hasRetry: n
        })
    }
}

function Xi(e) {
    var u = {};
    for (const [r, n] of Object.entries(e)) !r || (u[r] = n instanceof Uint8Array ? "[" + n.toString() + "]" : JSON.stringify(n));
    return u
}

function N(e, u) {
    !w || (u = Xi(u), u.name = e, w.push(u))
}
let Xe, oi, ru, Eu, hu, ai;
if (YUVCanvas.WebGLFrameSink.isAvailable()) {
    var iu = document.createElement("canvas");
    oi = YUVCanvas.attach(iu, {
        webGL: !0
    }), ru = iu.getContext("webgl")
} else Xe = new Worker("./yuv.js");
let W = [0, 0];

function mu(e) {
    if (Xe) Xe.postMessage(e);
    else {
        var u = new Date()
            .getTime();
        oi.drawFrame(e);
        var r = iu.width,
            n = iu.height,
            i = r * n * 4;
        i != ai && (Eu = new Uint8Array(i), hu = new Uint8Array(i), ai = i), ru.readPixels(0, 0, r, n, ru.RGBA, ru.UNSIGNED_BYTE, Eu);
        const t = r * 4,
            s = (n - 1) * t;
        for (let l = 0; l < i; l += t) hu.set(Eu.subarray(l, l + t), s - l);
        V = hu, W[1] += new Date()
            .getTime() - u, W[0] += 1, W[0] > 30 && (console.log("gl: " + parseInt("" + W[1] / W[0])), W = [0, 0])
    }
}

function si(e) {
    window.curConn = e
}

function Fu() {
    return window.curConn
}
async function $i(e) {
    V = void 0, w = [], setByName("remote_id", e), await curConn.start(e)
}

function di() {
    var e;
    (e = Fu()) == null || e.close(), si(void 0), V = void 0, w = void 0
}

function li() {
    var u;
    (u = window.curConn) == null || u.close();
    const e = new Gi;
    return si(e), e
}
let g;
async function ci(e, u) {
    return g || (await Nu.ready, g = Nu), typeof u == "string" && (u = ji(u)), g.crypto_sign_open(e, u)
}

function ji(e) {
    return g.from_base64(e, g.base64_variants.ORIGINAL)
}

function en() {
    const e = g.crypto_box_keypair(),
        u = e.privateKey,
        r = e.publicKey;
    return [u, r]
}

function un() {
    return g.crypto_secretbox_keygen()
}

function rn(e, u, r) {
    const n = Uint8Array.from(Array(24)
        .fill(0));
    return g.crypto_box_easy(e, n, u, r)
}

function pi(e) {
    for (var u = Array(24)
        .fill(0), r = 0; r < u.length && e > 0; r++) {
        var n = e & 255;
        u[r] = n, e = (e - n) / 256
    }
    return Uint8Array.from(u)
}

function nn(e, u, r) {
    return g.crypto_secretbox_easy(e, pi(u), r)
}

function tn(e, u, r) {
    return g.crypto_secretbox_open_easy(e, pi(u), r)
}
window.setByName = (e, u) => {
    switch (e) {
        case "remote_id":
            localStorage.setItem("remote-id", u);
            break;
        case "connect":
            li(), $i(u);
            break;
        case "login":
            u = JSON.parse(u), curConn.setRemember(u.remember == "true"), curConn.login(u.password);
            break;
        case "close":
            di();
            break;
        case "refresh":
            curConn.refresh();
            break;
        case "reconnect":
            curConn.reconnect();
            break;
        case "toggle_option":
            curConn.toggleOption(u);
            break;
        case "image_quality":
            curConn.setImageQuality(u);
            break;
        case "lock_screen":
            curConn.lockScreen();
            break;
        case "ctrl_alt_del":
            curConn.ctrlAltDel();
            break;
        case "switch_display":
            curConn.switchDisplay(u);
            break;
        case "remove":
            const r = nu();
            delete r[u], localStorage.setItem("peers", JSON.stringify(r));
            break;
        case "input_key":
            u = JSON.parse(u), curConn.inputKey(u.name, u.down == "true", u.press == "true", u.alt == "true", u.ctrl == "true", u.shift == "true", u.command == "true");
            break;
        case "input_string":
            curConn.inputString(u);
            break;
        case "send_mouse":
            let n = 0;
            switch (u = JSON.parse(u), u.type) {
                case "down":
                    n = 1;
                    break;
                case "up":
                    n = 2;
                    break;
                case "wheel":
                    n = 3;
                    break
            }
            switch (u.buttons) {
                case "left":
                    n |= 1 << 3;
                    break;
                case "right":
                    n |= 2 << 3;
                    break;
                case "wheel":
                    n |= 4 << 3
            }
            curConn.inputMouse(n, parseInt(u.x || "0"), parseInt(u.y || "0"), u.alt == "true", u.ctrl == "true", u.shift == "true", u.command == "true");
            break;
        case "option":
            u = JSON.parse(u), localStorage.setItem(u.name, u.value);
            break;
        case "peer_option":
            u = JSON.parse(u), curConn.setOption(u.name, u.value);
            break;
        case "input_os_password":
            curConn.inputOsPassword(u);
            break
    }
};
window.getByName = (e, u) => {
    let r = an(e, u);
    return typeof r == "string" || r instanceof String ? r : r == null || r == null ? "" : JSON.stringify(r)
};

function on() {
    const e = [];
    for (const [u, r] of Object.entries(nu())) {
        if (!u) continue;
        const n = r.tm,
            i = r.info;
        !n || !i || e.push([n, u, i])
    }
    return e.sort()
        .reverse()
        .map(u => u.slice(1))
}

function an(e, u) {
    switch (e) {
        case "peers":
            return on();
        case "remote_id":
            return localStorage.getItem("remote-id");
        case "remember":
            return curConn.getRemember();
        case "event":
            if (w && w.length) {
                const r = w[0];
                return w.splice(0, 1), JSON.stringify(r)
            }
            break;
        case "toggle_option":
            return curConn.getOption(u) || !1;
        case "option":
            return localStorage.getItem(u);
        case "image_quality":
            return curConn.getImageQuality();
        case "translate":
            return u = JSON.parse(u), Ji(u.locale, u.text);
        case "peer_option":
            return curConn.getOption(u);
        case "test_if_valid_server":
            break;
        case "version":
            return qi
    }
    return ""
}
let Du = new Worker("./libopus.js"),
    _i;

function sn(e, u) {
    _i = ln(e, u), Du.postMessage({
        channels: e,
        sampleRate: u
    })
}

function dn(e) {
    Du.postMessage(e, [e.buffer])
}
window.init = async () => {
    Xe && (Xe.onmessage = e => {
        V = e.data
    }), Du.onmessage = e => {
        _i.feed(e.data)
    }, jr(() => {}), await ui(), console.log("init done")
};

function nu() {
    try {
        return JSON.parse(localStorage.getItem("peers")) || {}
    } catch {
        return {}
    }
}

function ln(e, u) {
    return new Di({
        channels: e,
        sampleRate: u,
        flushingTime: 2e3
    })
}

function cn(e) {
    if (window.clipboardData && window.clipboardData.setData) return window.clipboardData.setData("Text", e);
    if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var u = document.createElement("textarea");
        u.textContent = e, u.style.position = "fixed", document.body.appendChild(u), u.select();
        try {
            return document.execCommand("copy")
        } catch (r) {
            console.warn("Copy to clipboard failed.", r)
        } finally {
            document.body.removeChild(u)
        }
    }
}
const fi = document.querySelector("#app");
if (fi) {
    let u = function(r, n, i) {
        !Fu() || (r == "input-password" ? (document.querySelector("div#status")
            .style.display = "none", document.querySelector("div#password")
            .style.display = "block") : r ? r == "error" ? (document.querySelector("div#status")
            .style.display = "block", document.querySelector("div#canvas")
            .style.display = "none", document.querySelector("div#text")
            .innerHTML = '<div style="color: red; font-weight: bold;">' + i + "</div>") : (document.querySelector("div#password")
            .style.display = "none", document.querySelector("div#status")
            .style.display = "block", document.querySelector("div#text")
            .innerHTML = '<div style="font-weight: bold;">' + i + "</div>") : (document.querySelector("div#canvas")
            .style.display = "block", document.querySelector("div#password")
            .style.display = "none", document.querySelector("div#status")
            .style.display = "none"))
    };
    fi.innerHTML = `
  <div id="connect" style="text-align: center"><table style="display: inline-block">
    <tr><td><span>Host: </span></td><td><input id="host" /></td></tr>
    <tr><td><span>Key: </span></td><td><input id="key" /></td></tr>
    <tr><td><span>Id: </span></td><td><input id="id" /></td></tr>
    <tr><td></td><td><button onclick="connect();">Connect</button></td></tr>
  </table></div>
  <div id="password" style="display: none;">
    <input type="password" id="password" />
    <button id="confirm" onclick="confirm()">Confirm</button>
    <button id="cancel" onclick="cancel();">Cancel</button>
  </div>
  <div id="status" style="display: none;">
    <div id="text" style="line-height: 2em"></div>
    <button id="cancel" onclick="cancel();">Cancel</button>
  </div>
  <div id="canvas" style="display: none;">
    <button id="cancel" onclick="cancel();">Cancel</button>
    <canvas id="player"></canvas>
    <canvas id="test-yuv-decoder-canvas"></canvas>
  </div>
`;
    let e;
    window.init(), document.body.onload = () => {
        const r = document.querySelector("#host");
        r.value = localStorage.getItem("custom-rendezvous-server");
        const n = document.querySelector("#id");
        n.value = localStorage.getItem("id");
        const i = document.querySelector("#key");
        i.value = localStorage.getItem("key"), e = YUVCanvas.attach(document.getElementById("player"))
    }, window.connect = () => {
        const r = document.querySelector("#host");
        localStorage.setItem("custom-rendezvous-server", r.value);
        const n = document.querySelector("#id");
        localStorage.setItem("id", n.value);
        const i = document.querySelector("#key");
        localStorage.setItem("key", i.value), (async () => {
            const s = li();
            s.setMsgbox(u), s.setDraw(l => {
                    mu(l), e.drawFrame(l)
                }), document.querySelector("div#status")
                .style.display = "block", document.querySelector("div#connect")
                .style.display = "none", document.querySelector("div#text")
                .innerHTML = "Connecting ...", await s.start(n.value)
        })()
    }, window.cancel = () => {
        di(), document.querySelector("div#connect")
            .style.display = "block", document.querySelector("div#password")
            .style.display = "none", document.querySelector("div#status")
            .style.display = "none", document.querySelector("div#canvas")
            .style.display = "none"
    }, window.confirm = () => {
        const r = document.querySelector("input#password")
            .value;
        r && (document.querySelector("div#password")
            .style.display = "none", Fu()
            .login(r))
    }
}